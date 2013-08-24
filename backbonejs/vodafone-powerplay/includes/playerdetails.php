<section id="player-details">
    <article class="article-top">
        <a href="#allplayers"><img class="back-button" src="http://media.news.com.au/multimedia/2011/11/power_play/assets/images/backButton.png"></a>
        <h1> <%= match_details[0].event_title %> - <%= match_details[0].player_name %> </h1>
    </article>

    <h2><%= match_details[0].team_playing %> - <%= match_details[0].match_type %>, <%= match_details[0].match_day %></h2>
    <img class="event-image" src="<%= match_details[0].event_image %>">

    <img class="voting-button" src="http://media.news.com.au/multimedia/2011/11/power_play/assets/images/votingButton.png">
        
    <div class="voted"></div>

    <article class="event-details">
        <%= match_details[0].event_description %>
    </article>
</section>
