window.addEventListener('DOMContentLoaded', function() {
    // Retrieve the clicked button from sessionStorage (if needed)
    const clickedButton = sessionStorage.getItem("clickedButton");

    if (clickedButton === "button1")
 {
                     // now button one is for hava mahal start with latest leader of hava mahel
    // main data that come from 2 page from original page 

          document.getElementById("name").innerHTML= " Balmukundachary";
          document.getElementById("party").innerHTML= "BJP ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:-Balmukundachary appears to be an independent candidate who participated in the Hawa Mahal constituency elections in Rajasthan. As per the 2023 election results, several candidates, including Balmukundachary, lost in this constituency, with Dr. Mahesh Joshi from Congress securing a win in the 2018 elections. For detailed updates on the election results or specific candidate performance, including Balmukundachary, you can check the ABP Live updates on the Hawa Mahal constituency. ";

        document.getElementById("inc").innerHTML= " INC:-  46.92% ";
        document.getElementById("bjp").innerHTML= " BJP:- 48.14% - Won ";
        document.getElementById("other").innerHTML= "Others:-4.94% ";

        document.getElementById("total").innerHTML= "Total Votes:- 202,504 ";
        document.getElementById("img1").src = "Balmukundachary.jpg";




         // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Surendra Pareek ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML=  "Details about the current winning candidate:- Surendra Pareek is an Indian politician from the Bharatiya Janata Party (BJP), representing the Hawa Mahal constituency in Jaipur, Rajasthan. Born on October 21, 1953, in Jaipur, he holds a B.A. and LL.B. degree. Surendra Pareek is married to Asha Pareek, and they have one son and one daughter. His political career has seen him as an influential figure within the BJP, particularly in his home constituency.He has reported assets worth over Rs 1 crore and liabilities amounting to about Rs 14 lakhs. Pareek father, Late Sitaram Pareek, was also known in the local community. He has remained actively involved in local and state politics, with his most recent public details available from his affidavit filed during elections";


                            document.getElementById("inc").innerHTML= " INC:-  (32.4%)";
                            document.getElementById("bjp").innerHTML= " BJP:- 50.67% - Won ";
                              document.getElementById("other").innerHTML= "Others:-13.32%. ";

                               document.getElementById("total").innerHTML= "Total Votes:- 53,685";
                              document.getElementById("img1").src = "Surendra Pareek.jpg"; });} 




                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Mahesh Joshi";
                            document.getElementById("party").innerHTML= "INC ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Mahesh Joshi is a prominent Indian politician from Rajasthan, affiliated with the Indian National Congress (INC). He has been active in politics for over three decades and is known as a key leader within the party, especially in Rajasthan. Joshi has served in important roles, including as the Minister of Public Health Engineering and Ground Water in the Rajasthan government in 2021. He has been elected as both an MLA and an MP, showing his significant influence in the state.  Mahesh Joshi is a loyalist of Rajasthan's Chief Minister, Ashok Gehlot, and is closely associated with various social organizations, including the Jai Club and Rambag Golf Club in Jaipur. He has also been the honorary head of the Rajasthan Brahmin Mahasabha since 2022 and supports local sports activities through tournaments in Jaipur.Despite his political achievements, Joshi's career has been marred by controversy. In 2023, he faced accusations of harassment linked to the suicide of a man named Ramprasad Meena, who alleged in a video before his death that he had been mistreated by Joshi and others. These allegations have been under police investigation.Joshi's net worth was estimated at around Rs. 2.5 crores in 2018, and his assets include various properties and movable assets. He also enjoys a notable social status, participating in both local and international activities.   ";

                            document.getElementById("inc").innerHTML= " INC:-  (52.7%)";
                            document.getElementById("bjp").innerHTML= " BJP:- (47.0%)";
                              document.getElementById("other").innerHTML= "Others:-(0.3%) ";

                               document.getElementById("total").innerHTML= "Total Votes:-  162,000 ";
                              document.getElementById("img1").src = "Mahesh Joshi.jpg"; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Balmukundachary ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Balmukundachary appears to be an independent candidate who participated in the Hawa Mahal constituency elections in Rajasthan. As per the 2023 election results, several candidates, including Balmukundachary, lost in this constituency, with Dr. Mahesh Joshi from Congress securing a win in the 2018 elections. For detailed updates on the election results or specific candidate performance, including Balmukundachary, you can check the ABP Live updates on the Hawa Mahal constituency.";

                            document.getElementById("inc").innerHTML= " INC:- (46.9%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (48.2%)- Won ";
                              document.getElementById("other").innerHTML= "Others:- (5.0%) ";

                               document.getElementById("total").innerHTML= "Total Votes:- 202,504 ";
                              document.getElementById("img1").src = "Balmukundachary.jpg"; });}

                  }       
     
  



// hawa mahal task complete .................................................................................................................................................

















     
// this is belng to civile line in jaipur ....
    else if (clickedButton === "button2")
     {
         document.getElementById("name").innerHTML= "Gopal Sharma  ";
          document.getElementById("party").innerHTML= "BJP ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Gopal Sharma, a politician from the Bharatiya Janata Party (BJP), won the Civil Lines constituency in Jaipur during the 2023 Rajasthan Legislative Assembly elections. Sharma secured a decisive victory over his primary opponent, Pratap Singh Khachariyawas from the Indian National Congress (INC), by a margin of over 28,000 votes. With this win, Sharma succeeded Khachariyawas, who had held the seat previously, marking a notable shift for the BJP in this key constituency in Jaipur. Sharma's victory was part of the broader 2023 electoral landscape in Rajasthan, reflecting strategic gains by BJP in various urban constituencies across the state. ";


        document.getElementById("inc").innerHTML= " INC:- (40.55%) ";
        document.getElementById("bjp").innerHTML= " BJP:-  (56.88%)- Won ";
        document.getElementById("other").innerHTML= "Others:-(0.7%) ";

        document.getElementById("total").innerHTML= "Total Votes:- 1,73,451 ";
        document.getElementById("img1").src = "Gopal Sharma.png";




        // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Arun Chaturvedi  ";
                            document.getElementById("party").innerHTML= "BJP ";
                             //  document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";
                              document.getElementById("heading").innerHTML= "Details about the current winning candidate:-Arun Chaturvedi is a senior Bharatiya Janata Party (BJP) leader in Rajasthan who has contested multiple assembly elections from the Civil Lines constituency in Jaipur. He has a doctorate in education and has previously held leadership roles within the state BJP organization, including state party president. Despite strong support, he faced a notable loss in the 2018 election against INC candidate Pratap Singh Khachariyawas, securing approximately 42.5% of the vote, just behind Khachariyawas’s winning margin.Chaturvedi’s profile reflects a commitment to educational and social issues, as well as a substantial presence in Rajasthan politics. His electoral campaigns often emphasize development and welfare for his constituents in Jaipur, with Civil Lines being a competitive seat between BJP and INC in recent elections. ";
                                 
                            document.getElementById("inc").innerHTML= " INC:-  (44.22%) ";
                            document.getElementById("bjp").innerHTML= " BJP:-  (51.61%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-(4.17%) ";

                               document.getElementById("total").innerHTML= "Total Votes:-150,527  ";
                              document.getElementById("img1").src = "Arun Chaturvedi.jpg"; });} 




                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Pratap Singh Khachariyawas";
                            document.getElementById("party").innerHTML= "NIC ";
                               // document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";
                                            document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Pratap Singh Khachariyawas is a senior politician from Rajasthan affiliated with the Indian National Congress (INC). He has held prominent roles, including Minister of Food and Civil Supplies in Rajasthan's state government under Chief Minister Ashok Gehlot. Khachariyawas represented the Civil Lines constituency in Jaipur in the 2008–2013 and 2018–2023 assembly terms. In the 2023 election, he contested the Civil Lines seat but lost to BJP candidate Gopal Sharma by a significant margin. Additionally, he has been actively involved in party administration, serving as a spokesperson for the Rajasthan Pradesh Congress Committee and holding leadership roles in Jaipur's Congress unit. His political approach emphasizes addressing state-level issues and strengthening food supply mechanisms in Rajasthan, reflecting his commitment to public welfare throughout his career.";
                                                              
                            document.getElementById("inc").innerHTML= " INC:- (53.53%) ";
                            document.getElementById("bjp").innerHTML= " BJP:-  (42.53% ";
                              document.getElementById("other").innerHTML= "Others:-(3.94%) ";

                               document.getElementById("total").innerHTML= "Total Votes:- 164,271 ";
                              document.getElementById("img1").src = "Pratap Singh Khachariyawas.jpg"; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                        document.getElementById("name").innerHTML= "Gopal Sharma  ";
          document.getElementById("party").innerHTML= "BJP ";
          // document.getElementById("heading").innerHTML= "Details about the current winning candidate:- ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Gopal Sharma, a politician from the Bharatiya Janata Party (BJP), won the Civil Lines constituency in Jaipur during the 2023 Rajasthan Legislative Assembly elections. Sharma secured a decisive victory over his primary opponent, Pratap Singh Khachariyawas from the Indian National Congress (INC), by a margin of over 28,000 votes. With this win, Sharma succeeded Khachariyawas, who had held the seat previously, marking a notable shift for the BJP in this key constituency in Jaipur. Sharma's victory was part of the broader 2023 electoral landscape in Rajasthan, reflecting strategic gains by BJP in various urban constituencies across the state. ";

        document.getElementById("inc").innerHTML= " INC:- (40.55%) ";
        document.getElementById("bjp").innerHTML= " BJP:-  (56.88%)- Won ";
        document.getElementById("other").innerHTML= "Others:-(0.7%) ";

        document.getElementById("total").innerHTML= "Total Votes:- 1,73,451 ";
        document.getElementById("img1").src = "Gopal Sharma.png";})


                           }

                  }       

// civile line work completer only summery remains  up side



    

     else if (clickedButton === "button3") 

     {

   
         document.getElementById("name").innerHTML= " Daya Kumari ";
          document.getElementById("party").innerHTML= "BJP ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Diya Kumari, a member of the Jaipur royal family and a BJP politician, won the Vidhyadhar Nagar Assembly seat in 2013 by a significant margin. Known for her unique blend of royal heritage and down-to-earth personality, Diya Kumari has been a popular figure in Rajasthan. Her electoral success has been attributed in part to her connection with the local populace and her effective campaigning. She later represented Rajsamand in Parliament, consistently supporting the BJP’s efforts across Rajasthan and beyond.";

        document.getElementById("inc").innerHTML= " INC:- (39.3%) ";
        document.getElementById("bjp").innerHTML= " BJP:- (55.5%) - Won ";
        document.getElementById("other").innerHTML= "Others:-(5.2%) ";

        document.getElementById("total").innerHTML= "Total Votes:- 1,70,563";
        document.getElementById("img1").src = "Daya Kumari.jpg";




        // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Narpat Singh Rajvi ";
                            document.getElementById("party").innerHTML= "BJP ";
                               // document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Narpat Singh Rajvi is a senior BJP politician from Rajasthan, representing the Vidhyadhar Nagar constituency in Jaipur. He is married to Ratan Kanwar, the daughter of former Vice President of India, Bhairon Singh Shekhawat. Rajvi has a post-graduate education and works in agriculture.Rajvi's political career includes serving as an MLA, and he has significant financial assets, amounting to over 16 crore rupees. He has not been involved in any criminal cases. In the 2023 elections, Rajvi contested from the Chittorgarh seat after being shifted from Vidhyadhar Nagar but was defeated by independent candidate Chandrabhan Aakya.";

                            document.getElementById("inc").innerHTML= " INC:-  (37.5%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (53.8%) - Won ";
                              document.getElementById("other").innerHTML= "Others:- (7.9%)";

                               document.getElementById("total").innerHTML= "Total Votes:- 1,41,020 ";
                              document.getElementById("img1").src = "Narpat Singh Rajvi.jpg"; });} 





                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Narpat Singh Rajvi ";
                            document.getElementById("party").innerHTML= "BJP ";
                               // document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Narpat Singh Rajvi is a senior BJP politician from Rajasthan, representing the Vidhyadhar Nagar constituency in Jaipur. He is married to Ratan Kanwar, the daughter of former Vice President of India, Bhairon Singh Shekhawat. Rajvi has a post-graduate education and works in agriculture.Rajvi's political career includes serving as an MLA, and he has significant financial assets, amounting to over 16 crore rupees. He has not been involved in any criminal cases. In the 2023 elections, Rajvi contested from the Chittorgarh seat after being shifted from Vidhyadhar Nagar but was defeated by independent candidate Chandrabhan Aakya.";

                            document.getElementById("inc").innerHTML= " INC:-  (41.3%)";
                            document.getElementById("bjp").innerHTML= " BJP:- (50.6%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-(8.1%)";

                               document.getElementById("total").innerHTML= "Total Votes:- : 1,65,442 ";
                              document.getElementById("img1").src = "Narpat Singh Rajvi.jpg"; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= " Daya Kumari";
                            document.getElementById("party").innerHTML= "BJP ";
                               // document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Diya Kumari, a member of the Jaipur royal family and a BJP politician, won the Vidhyadhar Nagar Assembly seat in 2013 by a significant margin. Known for her unique blend of royal heritage and down-to-earth personality, Diya Kumari has been a popular figure in Rajasthan. Her electoral success has been attributed in part to her connection with the local populace and her effective campaigning. She later represented Rajsamand in Parliament, consistently supporting the BJP’s efforts across Rajasthan and beyond.";


                            document.getElementById("inc").innerHTML= " INC:- (39.3%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (55.5%)  - Won ";
                              document.getElementById("other").innerHTML= "Others:-(5.2%) ";

                               document.getElementById("total").innerHTML= "Total Votes:- 1,70,563 ";
                              document.getElementById("img1").src = " Daya Kumari.jpg"; });}
                  }       



































    // my task kishan poll


      else if (clickedButton === "button4") 

     {
         document.getElementById("name").innerHTML= "Chandra Manohar Batwara ";
          document.getElementById("party").innerHTML= "BJP";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Chandra Manohar Batwara, a BJP candidate associated with the Rashtriya Swayamsevak Sangh, ran in the Kishanpole constituency in Jaipur. He has expressed a commitment to addressing key issues like regional development, safety, and curbing migration from the area. His background as a legal advocate and affiliation with local community interests contributed to his selection as a BJP candidate after the party decided to refresh their representation by choosing Batwara over the previous representative, Mohan Lal Gupta.In his campaign, Batwara emphasized the importance of prioritizing both development and security, aiming to represent the constituency's residents inclusively, regardless of religious or community demographics.";
        document.getElementById("inc").innerHTML= " INC:-  (40.52%)  ";
        document.getElementById("bjp").innerHTML= " BJP:-  (56.80%) ";
        document.getElementById("other").innerHTML= "Others:-  (1.07%) ";

        document.getElementById("total").innerHTML= "Total Votes:- 173,619";
        document.getElementById("img1").src = "Chandra Manohar Batwara.jpg";




        // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= " Amin Kagzi";

                            document.getElementById("party").innerHTML= "INC ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Amin Kagzi, a prominent politician in Rajasthan, represents the Kishan Pole constituency as a member of the Indian National Congress (INC). He has successfully won elections from this constituency multiple times, most recently in 2018 and 2023. In the 2018 election, Kagzi secured his seat by defeating Mohan Lal Gupta of the Bharatiya Janata Party (BJP) with a margin of 8,770 votes. Kagzi continued his winning streak in the 2023 election, again representing the INC and prevailing in a competitive race.He has a background in business, holds assets worth approximately ₹7.96 crore, and has no criminal cases reported against him. His education level is listed as Class XII, and he has been actively involved in addressing issues pertinent to his constituency.For more details on Amin Kagzi's career and recent election performance, you may refer to sources like  and .";

                            document.getElementById("inc").innerHTML= " INC:- (30.67%)(44.91%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (42.27% ";
                              document.getElementById("other").innerHTML= "Others:-(9.61%) ";

                               document.getElementById("total").innerHTML= "Total Votes:- 140,917 ";
                              document.getElementById("img1").src = "Amin Kagzi.jpg"; });} 




                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= " Amin Kagzi";


                            document.getElementById("party").innerHTML= "INC ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Amin Kagzi, a prominent politician in Rajasthan, represents the Kishan Pole constituency as a member of the Indian National Congress (INC). He has successfully won elections from this constituency multiple times, most recently in 2018 and 2023. In the 2018 election, Kagzi secured his seat by defeating Mohan Lal Gupta of the Bharatiya Janata Party (BJP) with a margin of 8,770 votes. Kagzi continued his winning streak in the 2023 election, again representing the INC and prevailing in a competitive race.He has a background in business, holds assets worth approximately ₹7.96 crore, and has no criminal cases reported against him. His education level is listed as Class XII, and he has been actively involved in addressing issues pertinent to his constituency.For more details on Amin Kagzis career and recent election performance, you may refer to sources like  and .";

                            document.getElementById("inc").innerHTML= " INC:-(50.67%) ";
                            document.getElementById("bjp").innerHTML= " BJP:-(44.28%) ";
                              document.getElementById("other").innerHTML= "(4.98%)";

                               document.getElementById("total").innerHTML= "Total Votes:-  186,434 ";
                              document.getElementById("img1").src = " Amin Kagzi.jpg"; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Chandra Manohar Batwara";
                            document.getElementById("party").innerHTML= "BJP ";
                               // document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";
                                    document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Chandra Manohar Batwara, a BJP candidate associated with the Rashtriya Swayamsevak Sangh, ran in the Kishanpole constituency in Jaipur. He has expressed a commitment to addressing key issues like regional development, safety, and curbing migration from the area. His background as a legal advocate and affiliation with local community interests contributed to his selection as a BJP candidate after the party decided to refresh their representation by choosing Batwara over the previous representative, Mohan Lal Gupta.In his campaign, Batwara emphasized the importance of prioritizing both development and security, aiming to represent the constituency's residents inclusively, regardless of religious or community demographics.";

                            document.getElementById("inc").innerHTML= " INC:-  (40.52%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (56.80%)- Won ";
                              document.getElementById("other").innerHTML= "Others:-(1.07%) ";

                               document.getElementById("total").innerHTML= "Total Votes:- 173,619 ";
                              document.getElementById("img1").src = " Chandra Manohar Batwara.jpg"; });}
                  }       











    
  else if (clickedButton === "button5") 

     {
         document.getElementById("name").innerHTML= "NO DATA available ";
          document.getElementById("party").innerHTML= "--------- ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- NO DATA available";

        document.getElementById("inc").innerHTML= " NO DATA available ";
        document.getElementById("bjp").innerHTML= " NO DATA available ";
        document.getElementById("other").innerHTML= "NO DATA available ";

        document.getElementById("total").innerHTML= "NO DATA available ";
        document.getElementById("img1").src = "UNABLE TO LOASD IMAGE IN IT ";






        // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Rameshwar Dudi ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Rameshwar Dudi is a prominent Indian politician from the Bharatiya Janata Party (BJP). He represented the Adarsh Nagar constituency in the Rajasthan Legislative Assembly, securing victory in the 2013 elections. Dudi's contributions have primarily focused on regional development and welfare. Throughout his political career, he has been involved in various social and economic initiatives aimed at improving the lives of his constituents. He lost his seat in the subsequent elections, but remains an influential figure in Rajasthan politics.";

                            document.getElementById("inc").innerHTML= " INC:- (30.67%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (69.33%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-0% ";

                               document.getElementById("total").innerHTML= "Total Votes:- 145,162 ";
                              document.getElementById("img1").src = "Rameshwar Dudi.jpg"; });} 




                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= " ";
                            document.getElementById("party").innerHTML= "";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- ";

                            document.getElementById("inc").innerHTML= "  ";
                            document.getElementById("bjp").innerHTML= " ";
                              document.getElementById("other").innerHTML= "";

                               document.getElementById("total").innerHTML= "";
                              document.getElementById("img1").src = ""; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= " ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- ";

                            document.getElementById("inc").innerHTML= "  ";
                            document.getElementById("bjp").innerHTML= "  ";
                              document.getElementById("other").innerHTML= " ";

                               document.getElementById("total").innerHTML= "";
                              document.getElementById("img1").src = ""; });}
                  }       




    
  else if (clickedButton === "button6") 

     {
         document.getElementById("name").innerHTML= "Kalicharan Saraf";
          document.getElementById("party").innerHTML= "BJP ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Kalicharan Saraf is a seasoned politician from Rajasthan, representing the Bharatiya Janata Party (BJP). He has served as a Member of the Legislative Assembly (MLA) for the Malviya Nagar constituency in Jaipur, winning the elections in 2013, 2018, and 2023. Saraf is known for his strong political influence in Jaipur, where he has established a solid support base. Throughout his career, he has focused on addressing local development issues and contributing to the state's governance. His consistent electoral victories demonstrate his ability to connect with voters and his effectiveness in the political arena.";

        document.getElementById("inc").innerHTML= " INC:- (37.36%)";
        document.getElementById("bjp").innerHTML= " BJP:-   (60.62%)";
        document.getElementById("other").innerHTML= "Others:- (1.05%)";

        document.getElementById("total").innerHTML= "Total Votes:-  1,52,116";
        document.getElementById("img1").src = " Kalicharan Saraf.avif";




        // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Kalicharan Saraf ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Kalicharan Saraf is a seasoned politician from Rajasthan, representing the Bharatiya Janata Party (BJP). He has served as a Member of the Legislative Assembly (MLA) for the Malviya Nagar constituency in Jaipur, winning the elections in 2013, 2018, and 2023. Saraf is known for his strong political influence in Jaipur, where he has established a solid support base. Throughout his career, he has focused on addressing local development issues and contributing to the state's governance. His consistent electoral victories demonstrate his ability to connect with voters and his effectiveness in the political arena.";

                            document.getElementById("inc").innerHTML= " INC:-  (31.5%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (68.5%)";
                              document.getElementById("other").innerHTML= "Others:- [Votes not available]";

                               document.getElementById("total").innerHTML= "Total Votes:- 1,31,230 ";
                              document.getElementById("img1").src = " Kalicharan Saraf.avif"; });} 




                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Kalicharan Saraf ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Kalicharan Saraf is a seasoned politician from Rajasthan, representing the Bharatiya Janata Party (BJP). He has served as a Member of the Legislative Assembly (MLA) for the Malviya Nagar constituency in Jaipur, winning the elections in 2013, 2018, and 2023. Saraf is known for his strong political influence in Jaipur, where he has established a solid support base. Throughout his career, he has focused on addressing local development issues and contributing to the state's governance. His consistent electoral victories demonstrate his ability to connect with voters and his effectiveness in the political arena.";

                            document.getElementById("inc").innerHTML= " INC:-  (49.5%) ";
                            document.getElementById("bjp").innerHTML= " BJP:-  (50.5%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-[Votes not available] ";

                               document.getElementById("total").innerHTML= "Total Votes:-  1,38,792 ";
                              document.getElementById("img1").src = "Kalicharan Saraf.avif"; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= " Kalicharan Saraf";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Kalicharan Saraf is a seasoned politician from Rajasthan, representing the Bharatiya Janata Party (BJP). He has served as a Member of the Legislative Assembly (MLA) for the Malviya Nagar constituency in Jaipur, winning the elections in 2013, 2018, and 2023. Saraf is known for his strong political influence in Jaipur, where he has established a solid support base. Throughout his career, he has focused on addressing local development issues and contributing to the state's governance. His consistent electoral victories demonstrate his ability to connect with voters and his effectiveness in the political arena.";

                            document.getElementById("inc").innerHTML= " INC:-   (37.36%)";
                            document.getElementById("bjp").innerHTML= " BJP:- (60.62%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-(1.05%)";

                               document.getElementById("total").innerHTML= "Total Votes:- 1,52,116 ";
                              document.getElementById("img1").src = "Kalicharan Saraf.avif"; });}
                  }       




















    
  else if (clickedButton === "button7") 

     {
         document.getElementById("name").innerHTML= "Bhajan Lal Sharma  ";
          document.getElementById("party").innerHTML= "BJP ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";

        document.getElementById("inc").innerHTML= " INC:- (30.67%) ";
        document.getElementById("bjp").innerHTML= " BJP:- (69.33%) - Won ";
        document.getElementById("other").innerHTML= "Others:-0% ";

        document.getElementById("total").innerHTML= "Total Votes:- 145,162 ";
        document.getElementById("img1").src = "bhajan lal .jpg";





        // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Ghanshyam Tiwari ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:-Ghanshyam Tiwari is a prominent politician from Rajasthan, best known for his association with the Bharatiya Janata Party (BJP). He has been an influential figure in the state's politics and served as a Member of the Legislative Assembly (MLA) for several terms.Tiwari has represented the Sanganer constituency in Jaipur multiple times, winning the seat in the 2013 elections. His tenure has been marked by a strong presence in the BJP, and he has been involved in various developmental initiatives for his constituency. Known for his vocal stance on various political issues, he has also been a critic of the Congress party in Rajasthan. In the 2013 elections, he won the Sanganer seat under the BJP banner with a notable margin, contributing significantly to the party’s position in the state. His role in Rajasthan's politics, particularly in Sanganer, has made him a key figure to watch in subsequent elections. Tiwari has been involved in several controversies, but his popularity in the region remains significant. ";

                            document.getElementById("inc").innerHTML= " INC:- (42.52%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (50.67%)- Won ";
                              document.getElementById("other").innerHTML= "Others:-(6.79%) ";

                               document.getElementById("total").innerHTML= "Total Votes:-  2,01,000 ";
                              document.getElementById("img1").src = "Ghanshyam Tiwari.jpg"; });} 




                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Ashok Lahoty ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:-Ashok Lahoty is an influential politician from Rajasthan, associated with the Bharatiya Janata Party (BJP). He served as a Member of the Legislative Assembly (MLA) from the Sanganer constituency in Jaipur, winning the seat in the 2018 elections. Lahoty is known for his strong political presence in Jaipur and his involvement in various development projects in the region.In the 2018 Rajasthan Assembly elections, Lahoty secured a significant victory, defeating his closest rival, Pushpendra Bhardwaj of the Indian National Congress (INC). His win was seen as a crucial part of the BJP’s stronghold in the region. As an MLA, Lahoty has focused on infrastructure development, education, and healthcare improvements within his constituency, earning recognition for his dedication to local issues.Lahoty’s political journey is marked by his work with the BJP in Rajasthan, where he has gained a reputation for being a proactive leader and an advocate for the BJP’s policies in the state. His influence in Sanganer and beyond remains considerable, and he continues to play a significant role in shaping local governance. ";

                            document.getElementById("inc").innerHTML= " INC:-  (40.45%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (55.82%)- Won ";
                              document.getElementById("other").innerHTML= "Others:-(3.73%) ";

                               document.getElementById("total").innerHTML= "Total Votes:- 2,09,000 ";
                              document.getElementById("img1").src = "Ashok Lahoty.jpg"; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "Bhajan Lal Sharma ";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Bhajan Lal Sharma is a prominent Bharatiya Janata Party (BJP) leader and politician who achieved a notable victory in the 2023 Rajasthan Assembly elections, representing the Sanganer constituency in Jaipur. Known for his strong voter base, he secured 145,162 votes, capturing approximately 69.33% of the total votes. This win reinforced the BJP's longstanding influence in Sanganer, a constituency where the party has traditionally held sway. Sharma's success reflects his popularity in the region and the BJP's continued dominance in the Jaipur area, especially given his significant margin over the Congress candidate, Poonam Sharma. ";

                            document.getElementById("inc").innerHTML= " INC:- (30.67%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (69.33%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-0% ";

                               document.getElementById("total").innerHTML= "Total Votes:- 145,162 ";
                              document.getElementById("img1").src = "bhajan lal .jpg"; });}
                  }       



    

      else if (clickedButton === "button8") 

     {
         document.getElementById("name").innerHTML= "Kailash Chand Verma ";
          document.getElementById("party").innerHTML= "BJP ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Kailash Chand Verma is an Indian politician from Rajasthan, affiliated with the Bharatiya Janata Party (BJP). He is currently serving as a Member of the Rajasthan Legislative Assembly (MLA) from the Bagru constituency. Verma won his seat in the 2023 Rajasthan Legislative Assembly election by defeating his opponent, Ganga Devi Verma from the Indian National Congress (INC), with a margin of 45,250 votes He has previously served as the Parliamentary Secretary in the Government of Rajasthan. In terms of education, Kailash Chand Verma holds an M.A. and Ph.D. from the University of Rajasthan. In his personal life, he is married to Sita Devi and they have one child";

        document.getElementById("inc").innerHTML= " INC:- (38.92%) ";
        document.getElementById("bjp").innerHTML= " BJP:- (56.54%) - Won ";
        document.getElementById("other").innerHTML= "Others:-no idea  ";

        document.getElementById("total").innerHTML= "Total Votes:- 145,162 ";
        document.getElementById("img1").src = "Kailash Chand Verma.jpg";










        // this is where when we click on year so it change new data on it accourding to year

               if(document.getElementById('old'))
               {
                      document.getElementById('old').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "KAILASH VERMA ";
                            document.getElementById("party").innerHTML= "BJP ";
                               // document.getElementById("heading").innerHTML= "Details about the current winning candidate:- ";
          document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Kailash Chand Verma is an Indian politician from Rajasthan, affiliated with the Bharatiya Janata Party (BJP). He is currently serving as a Member of the Rajasthan Legislative Assembly (MLA) from the Bagru constituency. Verma won his seat in the 2023 Rajasthan Legislative Assembly election by defeating his opponent, Ganga Devi Verma from the Indian National Congress (INC), with a margin of 45,250 votes He has previously served as the Parliamentary Secretary in the Government of Rajasthan. In terms of education, Kailash Chand Verma holds an M.A. and Ph.D. from the University of Rajasthan. In his personal life, he is married to Sita Devi and they have one child";

                            document.getElementById("inc").innerHTML= " INC:- (31.01%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (57.34%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-9% ";

                               document.getElementById("total").innerHTML= "Total Votes:- 148,162 ";
                              document.getElementById("img1").src = "Kailash Chand Verma.jpg"; });} 




                              if(document.getElementById('mid'))
               {
                      document.getElementById('mid').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= "GANGA DEVI ";
                            document.getElementById("party").innerHTML= "INC ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:- Ganga Devi is a two-time MLA from the Bagru Assembly Constituency in Rajasthan, representing the Indian National Congress (INC). She won the seat in 2008 and 2018 but lost in the 2023 elections. Her career includes work as a housewife and social worker. She previously defeated candidates like Rakhshpal Kuldeep in 2008 and Kailash Chand Verma in 2018. Ganga Devi lost her seat in 2023 to BJP's Kailash Chand Verma";

                            document.getElementById("inc").innerHTML= " INC:- (44.77%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (42.30%)  ";
                              document.getElementById("other").innerHTML= "Others:-no idea kya pata % ";

                               document.getElementById("total").innerHTML= "Total Votes:- 123,162 ";
                              document.getElementById("img1").src = "GANGA DEVI.jpg"; });} 


                              if(document.getElementById('new'))
                                   {
                      document.getElementById('new').addEventListener('click', function() 
                       {

                           document.getElementById("name").innerHTML= " Kailash Chand Verma";
                            document.getElementById("party").innerHTML= "BJP ";
                               document.getElementById("heading").innerHTML= "Details about the current winning candidate:-Kailash Chand Verma is an Indian politician from Rajasthan, affiliated with the Bharatiya Janata Party (BJP). He is currently serving as a Member of the Rajasthan Legislative Assembly (MLA) from the Bagru constituency. Verma won his seat in the 2023 Rajasthan Legislative Assembly election by defeating his opponent, Ganga Devi Verma from the Indian National Congress (INC), with a margin of 45,250 votes He has previously served as the Parliamentary Secretary in the Government of Rajasthan. In terms of education, Kailash Chand Verma holds an M.A. and Ph.D. from the University of Rajasthan. In his personal life, he is married to Sita Devi and they have one child ";

                            document.getElementById("inc").innerHTML= " INC:- (38.92%) ";
                            document.getElementById("bjp").innerHTML= " BJP:- (56.54%) - Won ";
                              document.getElementById("other").innerHTML= "Others:-0% ";

                               document.getElementById("total").innerHTML= "Total Votes:- 133,162 ";
                              document.getElementById("img1").src = "Kailash Chand Verma.jpg"; });}
                  }       
    



        















    // Clear sessionStorage after Page 2 is loaded to prevent issues on refresh
    // sessionStorage.removeItem("clickedButton");

    // // Add event listeners to buttons to modify content when clicked
    // document.getElementById('btnContent1').addEventListener('click', function() {
    //     document.getElementById("image").src = "image1.jpg";
    //     document.getElementById("text").innerHTML = "This is Content 1 (from button click).";
    // });

    // document.getElementById('btnContent2').addEventListener('click', function() {
    //     document.getElementById("image").src = "image2.jpg";
    //     document.getElementById("text").innerHTML = "This is Content 2 (from button click).";
    // });

    // document.getElementById('btnContent3').addEventListener('click', function() {
    //     document.getElementById("image").src = "image3.jpg";
    //     document.getElementById("text").innerHTML = "This is Content 3 (from button click).";
    });