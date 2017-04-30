$(function() {

    $('.scrollspy').scrollSpy();
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
    document.addEventListener('DOMContentLoaded', function(){
      Typed.new('#story1', {
          strings: ['Once upon a time there were four little Rabbits, and their names were— Flopsy, Mopsy, Cotton-tail, and Peter. They lived with their Mother in a sand-bank, underneath the root of a very big fir-tree.'],
          typeSpeed: 0});
      });

})

function typed(){
  document.addEventListener('DOMContentLoaded', function(){
    Typed.new('#story1', {
        strings: ['Once upon a time there were four little Rabbits, and their names were— Flopsy, Mopsy, Cotton-tail, and Peter. They lived with their Mother in a sand-bank, underneath the root of a very big fir-tree.'],
        typeSpeed: 0
      });
    });
}
