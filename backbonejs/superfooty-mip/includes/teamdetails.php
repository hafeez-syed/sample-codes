<section id="team-details">
   
    <header id="header">
        <div class="flag"><img src="<%= team_slug %>"></div>
        <div class="club"><%= team_club %></div>        
    </header>
    
    <section id="players-container">
        
        <% for (var i=0; i<=team_players.length-1; i++) { %>
            <div class="block">
                <img class="players" src="<%= team_players[i].player_largeImage%>">
                <div class="voting-bar"></div>
                <div class="player-name"><%= team_players[i].player_firstname %> <%= team_players[i].player_lastname %></div>
                <div class="voting-button" id="<%= i %>"></div>
                <div class="player-hover-container">
                    <div class="players-hover-bg"></div>
                    <div class="players-description"><%= team_players[i].player_description %></div>
                    <div class="players-popularity"><%= team_players[i].player_popularity %>&#37;</div>
                </div>
            </div>
        <% } %>

    </section>

    <footer id="footer">
        
    </footer>

</section>
