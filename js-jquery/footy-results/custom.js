/**
 *
 * @author:       Hafeez Syed - hafeez.syed@news.com.au
 * @type:         javascript/jquery
 * @project:      Footy Fans Survey Results 2013
 * @description:  Adding/altering pagination, styling the pages and 
 *                initializing the Google Charts
 *
 */
/**
 *  REFER TO http://jquery.com/
 *
 */
$( document ).ready(function() {
      /* =========================================
         Setting pagination properties
         ========================================== 
      */
      $('.pages').pagination({
          pages: 5,
          cssStyle: 'compact-theme',
          onPageClick: function(pageNumber){numberclicked(pageNumber)}
      });

      /* =========================================
         Calling first page when all pages are loaded
         ========================================== 
      */
    numberclicked(1);
  });
  

/* =========================================
   Initializing variables
   ========================================== 
*/

  var chart       = 1;
  var currentPage = 0;
  var pageStart   = 0;
  var pageNumInit = 1;
  var pageNumEnd  = pageNumInit + 9;


  function numberclicked(num) {

    pageNumInit = 1;
    pageNumEnd  = pageNumInit + 9;
   

    currentPage = num;

    /* =========================================
       Enabling and disabling charts
       ========================================== 
    */

    for(i=1; i<=5; i++) {
      for(j=chart; j<=chart+9; j++) {
        $('#page-'+i).append($('#chart_div'+j));
      }
      
     $('#page-'+i).css({'opacity':'0', 'position':'absolute', 'top':'0px', 'left':'-1000px'});
      chart = j;
    }

    $('#page-'+currentPage).css({'opacity':'1', 'left':'0px'});
    
    
    /* =========================================
       Setting the height of the page's container
       ========================================== 
    */

    if(currentPage == 1) {
      $('#chartsContainer').css({'min-height':'4050px'});
    }else{
      $('#chartsContainer').css({'min-height':$('#page-'+currentPage).height()+50});      
    }

    
    /* ==============================================
       Replacing page numbers with Questions numbers 
       ==============================================
    */

    $('.pages ul li').each(function(){
      if( !isNaN($(this).find('a').text()) && ($(this).find('a').text() != '') )
      {
        $(this).find('a').text('Q'+pageNumInit + ' - Q' + pageNumEnd);
        pageNumInit = pageNumInit + 10;
        pageNumEnd  = pageNumEnd  + 10;
      }else if( !isNaN($(this).find('span').text()) && ($(this).find('span').text() != '')){
        $(this).find('span').text('Q'+pageNumInit + ' - Q' + pageNumEnd);
        pageNumInit = pageNumInit + 10;
        pageNumEnd  = pageNumEnd  + 10;
      }
    });
  }

  /* ====================================================
     Load the Visualization API and the piechart package
     ====================================================
  */

  google.load('visualization', '1.0', {'packages':['corechart']});


  /* ===================================================================
     Set a callback to run when the Google Visualization API is loaded
     ===================================================================
  */
 
  // Page 1
  google.setOnLoadCallback(drawChart1);
  google.setOnLoadCallback(drawChart2);
  google.setOnLoadCallback(drawChart3);
  google.setOnLoadCallback(drawChart4);
  google.setOnLoadCallback(drawChart5);
  google.setOnLoadCallback(drawChart6);
  google.setOnLoadCallback(drawChart7);
  google.setOnLoadCallback(drawChart8);
  google.setOnLoadCallback(drawChart9);
  google.setOnLoadCallback(drawChart10);



  // Page 2
  google.setOnLoadCallback(drawChart11);
  google.setOnLoadCallback(drawChart12);
  google.setOnLoadCallback(drawChart13);
  google.setOnLoadCallback(drawChart14);
  google.setOnLoadCallback(drawChart15);
  google.setOnLoadCallback(drawChart16);
  google.setOnLoadCallback(drawChart17);
  google.setOnLoadCallback(drawChart18);
  google.setOnLoadCallback(drawChart19);
  google.setOnLoadCallback(drawChart20);


  // Page 3
  google.setOnLoadCallback(drawChart21);
  google.setOnLoadCallback(drawChart22);
  google.setOnLoadCallback(drawChart23);
  google.setOnLoadCallback(drawChart24);
  google.setOnLoadCallback(drawChart25);
  google.setOnLoadCallback(drawChart26);
  google.setOnLoadCallback(drawChart27);
  google.setOnLoadCallback(drawChart28);
  google.setOnLoadCallback(drawChart29);
  google.setOnLoadCallback(drawChart30);


  // Page 4
  google.setOnLoadCallback(drawChart31);
  google.setOnLoadCallback(drawChart32);
  google.setOnLoadCallback(drawChart33);
  google.setOnLoadCallback(drawChart34);
  google.setOnLoadCallback(drawChart35);
  google.setOnLoadCallback(drawChart36);
  google.setOnLoadCallback(drawChart37);
  google.setOnLoadCallback(drawChart38);
  google.setOnLoadCallback(drawChart39);
  google.setOnLoadCallback(drawChart40);


  // Page 5
  google.setOnLoadCallback(drawChart41);
  google.setOnLoadCallback(drawChart42);
  google.setOnLoadCallback(drawChart43);
  google.setOnLoadCallback(drawChart44);
  google.setOnLoadCallback(drawChart45);
  google.setOnLoadCallback(drawChart46);
  google.setOnLoadCallback(drawChart47);
  google.setOnLoadCallback(drawChart48);
