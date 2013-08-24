                <section id="thumbnails">
                    <% for(var i=0; i<=match_details.length-1; i++) {%>
                    <div class="<%= match_details[i].thumbBg %>">
                        <div class="teams"><%= match_details[i].team_playing %></div>
                        <div class="eventVotes"><%= match_details[i].event_votes %> votes</div>
                        <div class="thumb"><img src="<%= match_details[i].event_thumbnail %>" alt="<%= match_details[i].event_title %>"></div>
                        <div class="<%= match_details[i].playButton %>" id="<%= match_details[i].event_id %>"></div>
                        <div class="what-game"><%= match_details[i].match_type %> - <%= match_details[i].match_day %></div>
                        <div class="what-game sub"><%= match_details[i].event_title %></div>
                        <div class="what-game sub"><%= match_details[i].player_name %></div>
                    </div>
                    <% } %>
                </section>