$(function() {

    $('.scrollspy').scrollSpy();
    dragDrop();
    typeOnClick();
    $("#games").hide();
});

function dragDrop(){
  $( '#draggable, #draggable-nonvalid' ).draggable();
      $( '#droppable' ).droppable({
        accept: '#draggable',
        classes: {
          'ui-droppable-active': 'ui-state-active',
          'ui-droppable-hover': 'ui-state-hover'
        },
  drop: function( event, ui ) {
          $( this )
            .addClass( 'ui-state-highlight' )
            .find( 'p' )
              .html( 'Dropped!' );
        }
      });
}

function typeOnClick(){
  var clicks = 0;
  $("#audio").click(function() {
      clicks ++;
    if(clicks%2 == 0 ){
      $("#story1").hide();
      $("#games").show();
    }else if(clicks > 1 && clicks%2 != 0 ){
      $("#story1").show();
      $("#games").hide();
    }else{
      $("#story1").show();
      $("#games").hide();
      $("#story1").typed({
        strings: ["<h1>The Tale of Peter Rabbit</h1><h2> by Beatrix Potter</h2> ^8000 Once upon a time there were four little Rabbits, and their names were--Flopsy, Mopsy, Cotton-tail, and Peter.<br>^500They lived with their Mother in a sand-bank, underneath the root of a very big fir-tree.<br>\ 'Now my dears,' said old Mrs. Rabbit one morning, 'you may go into the fields or down the lane, but don't go into Mr. McGregor's garden: your Father had an accident there; he was put in a pie by Mrs. McGregor.'<br>^300'Now run along, and don't get into mischief. I am going out.'<br> Then old Mrs. Rabbit took a basket and her umbrella, and went through the wood to the baker's. She bought a loaf of brown bread and five currant buns."],
        typeSpeed: 15,
        startDelay: 200,
        backSpeed: 100,
        backDelay: 385000,
        showCursor: false,
        contentType: 'html' });
    };
  });
};
