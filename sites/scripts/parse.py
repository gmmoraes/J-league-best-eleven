#!/usr/bin/env python
# -*- coding: utf-8 -*- 
import sqlite3
import urllib2
from bs4 import BeautifulSoup
import re
import datetime




urlLinks = "https://data.j-league.or.jp/SFTP01/"
page = urllib2.urlopen(urlLinks)
soup = BeautifulSoup(page.read(), 'html.parser')
link = soup.find_all("table", {"class":"main-box"})
url_list = []
player_list = []
subbs_list = []
num = 0



#gets the links of the matches of the section
for links in link:
    tbody = links.find_all("tbody")
    for links in tbody:
        tr = links.find_all("tr")
        for links in tr:
            td = links.find_all("td", {"class":"score"})
            for links in td:
                a = links.find_all("a")
                for links in a:
                    if links.has_attr('href'):
                        #print (links.attrs['href'])
                        url_list.append("https://data.j-league.or.jp" + links.attrs['href'] + "&lang=en")
                        
                        
                        
                        
                        
                        
                        


for url2 in url_list:
    page2 = urllib2.urlopen(url2)
    soup2 = BeautifulSoup(page2.read(), 'html.parser')
    links2 = soup2.find_all("div", {"class":"score-board-b"})
    divLeft = soup2.find_all("div", {"class":"two-column-table-box-l"})
    divRight = soup2.find_all("div", {"class":"two-column-table-box-r"})
    div = [divRight, divLeft]
    
    for subbs in div:
        for code in subbs:
            table = code.find_all("table")
            h4 = code.findChildren('h4')
            for code in h4:
                if code.text == "Substitutes":
                    for code in table:
                        tr = code.find_all("tr")
                        for code in tr:
                            tdName = code.find_all("td", {"class":"name"})
                            tdPosition = code.find_all("td", {"class":"position"})
                            
                            #gets the position of the players
                            for code in tdPosition:
                                span = code.find_all("span")
                                for code in span:
                                    subbs_list.append(code.text.lstrip())
                                    #gets the name of the players
                            for code in tdName:
                                subbs_list.append(code.text.lstrip())
                                


    for divs in div:
        for code in divs:
            table = code.find_all("table")
            teamName = code.find_all("h3", {"class":"two-column-table-t-base"}) 
            h4 = code.findChildren('h4')
            #gets the team names
            for code in teamName:
                #codes = re.sub('\s+', '', code.text)
                #codes2 = re.sub(r"(?<![A-Z])(?<!^)([A-Z])",r" \1",str(codes))
                player_list.append(code.text.lstrip())
            for code in h4:
                if code.text == "Starters":
                    for code in table:
                        tr = code.find_all("tr")
                        for code in tr:
                            tdName = code.find_all("td", {"class":"name"})
                            tdPosition = code.find_all("td", {"class":"position"})
                            #tdChange = code.findChildren("td")
                            
                            #gets the position of the players
                            for code in tdPosition:
                                span = code.find_all("span")
                                for code in span:
                                    #codes = re.sub('\s+', '', code.text)
                                    #codes2 = re.sub(r"(?<![A-Z])(?<!^)([A-Z])",r" \1",str(codes))
                                    player_list.append(code.text.lstrip())
                                    #gets the name of the players
                            for code in tdName:
                                #codes = re.sub('\s+', '', code.text)
                                #codes2 = re.sub(r"(?<![A-Z])(?<!^)([A-Z])",r" \1",str(codes))
                                player_list.append(code.text.lstrip())
                                #translator= Translator(from_lang = "ja", to_lang="en")
                                #translation = translator.translate(players.text)
                                #print(translation) 
                                #player_list.append(players.text.encode("UTF-8"))
                                

                if code.text == "Substitute":
                    for code in table:
                        tr = code.find_all("tr")
                        for code in tr:
                            tdChange = code.find_all("td", {"class":"name"})
                            tdPosition = code.find_all("td", {"class":"position"})
                            for code in tdChange:
                                num = num + 1
                                if num % 2 ==0:
                                    if code.text.lstrip() in subbs_list:
                                        index = subbs_list.index(code.text.lstrip())
                                        player_list.append(subbs_list[index - 1])
                                        player_list.append(code.text.lstrip())

for a in player_list:
    if a =="Yokohama F･Marinos".decode('utf-8'):
        index = player_list.index(a)
        player_list[index] = "Yokohama"
teams = ['Kawasaki Frontale', 'Kashima Antlers', 'Cerezo Osaka', 'Kashiwa Reysol', 'Jubilo Iwata', 'Urawa Reds', 'Sagan Tosu', 'Vissel Kobe', 'Gamba Osaka', 'Hokkaido Consadole Sapporo', 'Vegalta Sendai', 'Sanfrecce Hiroshima', 'F.C.Tokyo', 'Shimizu S-Pulse', 'Ventforet Kofu', 'Albirex Niigata', 'Omiya Ardija','Yokohama']
list_of_lists = []
index_list = []
number = 0

#add the index of the teams from player list to index list
for team in teams:
    index_list.append(player_list.index(team))

index_list.sort()
#puts the players into a list of their team and put these list into list of lists
while number < 17:
    list_of_lists.append(player_list[index_list[number]:index_list[number+1]])
    #print(player_list[index_list[number]:index_list[number+1]])
    number = number + 1

#adds the last team to the list    
list_of_lists.append(player_list[index_list[-1]:])

#prints the teams.
for a in list_of_lists[0]:
    pass

#list_of_lists[0].insert(1, "pass")

shonanDict = {"TeamName": '', "Name": [], "Position": []}
#prints the teams.
length = 0

while length < len(list_of_lists[0]):
    for a in list_of_lists[0]:
        if list_of_lists[0].index(a) == 0:
            shonanDict['TeamName'] = a
        elif list_of_lists[0].index(a) %2 == 0:
            shonanDict['Name'].append(a)
        else:
            shonanDict['Position'].append(a)
        length = length + 1
        