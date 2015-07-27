$(document).ready(function() {

  function accentCurrentPageNav(pageNumber) {
    var $links = jQuery.makeArray($('.item__pageNums'))
    $links.forEach(function(el, idx, arr) {
      var html = parseInt($(el).html());
      var pn = parseInt(pageNumber);
      if (pn === html) {
        $(el).removeClass("item__pageNums");
        $(el).addClass("item__currentPage");
      };
    });
  };

  function updateBody(items) {
    if (items.length > 0) {
      $('.item__list').html("");
      items.forEach(function(el, idx, arr) {
        var item = "";
        item += "<strong>Name: </strong>" + el.name + "<br>";
        item += "<strong>Category: </strong>" + el.category + "<br>";
        item += "<strong>Price: </strong>$" + (el.price_in_cents / 100) + "<br>";
        $('.item__list').append('<div class="item__single">' + item + '</div');
      });
    } else {
      $('.item__list').html("");
      var display = "<strong>There are no items to display</strong>";
      $('.item__list').append('<div class="item__single">' + display + '</div>');
    };
  };

  function generateLinkNums(pageNumber, maxPages) {
    pn = parseInt(pageNumber);
    mp = parseInt(maxPages);
    arr = [];
    if (mp < 5) {
      for (i = 1; i <= mp; i++) {
        arr.push(pn + i);
      };
    } else if (pn <= 3 && pn < (mp -2)) {
      for (i = 1; i <= 5; i++) {
        arr.push(i);
      };
    } else if (pn > 3 && pn < (mp - 2)) {
      for (i = -2; i <= 5; i++) {
        arr.push(pn + i);
      };
    } else if (pn >= (mp -2 )) {
      for (i = -4; i <= 5; i++) {
        arr.push(mp + i);
      };
    } else {
      for (i = 0; i <= 5; i++) {
        arr.push(pn + i);
      };
    };
    return arr;
  };

  function updateLinks(linkNums, pageNumber) {
    var links = "";
    links += "<a href='' class='item__pageNums'>" + linkNums[0] + "</a>";
    links += "<a href='' class='item__pageNums'>" + linkNums[1] + "</a>";
    links += "<a href='' class='item__pageNums'>" + linkNums[2] + "</a>";
    links += "<a href='' class='item__pageNums'>" + linkNums[3] + "</a>";
    links += "<a href='' class='item__pageNums'>" + linkNums[4] + "</a>";
    $('.item__pageNav').html(links);
    accentCurrentPageNav(pageNumber);
  };

  function ajaxCall(pageNumber) {
    var url = '/items_page/' + pageNumber + '.json';
    $.ajax({
      url: url,
      method:'GET',
      success: function (data){
        updateBody(data.items);
        var linkNums = generateLinkNums(pageNumber, data.max_pages);
        updateLinks(linkNums, pageNumber);
      }
    });
  };

  accentCurrentPageNav(1);

  $(document).on('click', '.item__pageNums', function(event) {
    event.preventDefault();
    var pageNumber = $(this).html();
    ajaxCall(pageNumber);
  });

  $(document).on('click', '.item__currentPage', function(event) {
    event.preventDefault();
  });
});
