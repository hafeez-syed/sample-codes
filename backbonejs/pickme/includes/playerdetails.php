<section id="details-page">
    <div class="close-details"></div>
    <div class="arrow-left"></div>
    <div id="video-player">
        <video id="example_video_1" class="video-js vjs-default-skin"
          controls preload="auto" width="440" height="250"
          poster="http://video-js.zencoder.com/oceans-clip.png"
          data-setup='{"controls": true, "autoplay": false, "preload": "auto"}'>
         <source src="http://video-js.zencoder.com/oceans-clip.mp4" type='video/mp4' />
         <source src="http://video-js.zencoder.com/oceans-clip.webm" type='video/webm' />
         <source src="http://video-js.zencoder.com/oceans-clip.ogv" type='video/ogg' />
        </video>
    </div>
    <div class="arrow-right"></div>
    <div class="player-stats">
        <div class="name-tag"><img src="<%= player_tag %>"></div>
        <div class="profile-photo"><img src="<%= player_image %>"></div>
        <div class=row>
            <div class="prop">age</div>
            <div class="val"><%= player_age %></div>
        </div>
        <div class=row>
            <div class="prop">height</div>
            <div class="val"><%= player_height %></div>
        </div>
        <div class=row>
            <div class="prop">weight</div>
            <div class="val"><%= player_weight %></div>
        </div>
        <div class=row>
            <div class="prop">from</div>
            <div class="val"><%= player_from %></div>
        </div>
        <div class=row>
            <div class="prop">position</div>
            <div class="val"><%= player_position %></div>
        </div>
        <div class=row>
            <div class="prop">predicted draft range</div>
            <div class="val"><%= player_range %></div>
        </div>
        <div class=row>
            <div class="prop">plays like</div>
            <div class="val"><%= player_likes %></div>
        </div>
        <div class=row>
            <div class="prop"></div>
            <div class="val description"><%= player_content %></div>
        </div>
    </div>
</section>