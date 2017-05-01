$(function() {
    $('.scrollspy').scrollSpy();
    $('#images').hide();

    $('#card').hide();
    //dragDrop();
    typeOnClick();
    scroll();
    //displayImages();
});

/*function dragDrop(){
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
}*/

function typeOnClick(){
  var clicks = 0;
  $('#audio').click(function() {
      clicks ++;
    if(clicks%2 == 0 ){
      $('#story1').hide();
      $('#images').hide();
      $('#card').show();
    }else if(clicks > 1 && clicks%2 != 0 ){
      $('#story1').show();
      $('#images').show();
      $('#card').hide();
    }else{
      $('#images').show();
      $('#story1').show();
      $('#card').hide();
      $('#story1').typed({
        strings: ["<h1>The Tale of Peter Rabbit</h1><h2> by Beatrix Potter</h2> ^8500 <p> Once upon a time there were four little Rabbits, and their names were--Flopsy, Mopsy, Cotton-tail, and Peter.<br>^700They lived with their Mother in a sand-bank, underneath the root of a very big fir-tree.<br>\^800 \'Now my dears,\' said old Mrs. Rabbit one morning, ^250\'You may go into the fields or down the lane, but don\'t go into Mr. McGregor\'s garden: ^600Your Father had an accident there; he was put in a pie by Mrs. McGregor.\'<br>^660\'Now run along, and don\'t get into mischief.^150 I am going out.\'<br>^1000 Then old Mrs. Rabbit took a basket and her umbrella, and went through the wood to the baker\'s.^300 She bought a loaf of brown bread and five currant buns.^1100<br> Flopsy, Mopsy, and Cottontail, who were good little bunnies, went down the lane to gather blackberries.<br>^1000 But ^300 Peter,^200 who was very naughty, ran straight away ^300 to Mr. McGregor's garden, and squeezed under the gate!^400<br> First he ate some lettuces ^200 and some French beans; and then he ate some radishes; ^300And then, ^200 feeling rather sick,^200 he went to look for some parsley.<br>^300But round the end of a cucumber frame, whom should he meet but Mr. McGregor!^500 <br>Mr. McGregor was on his hands and knees planting out young cabbages, ^450but he jumped up and ran after Peter, waving a rake and calling out,<br>^100 \'Stop thief!\' ^900 Peter was most dreadfully frightened; he rushed all over the garden, for he had forgotten the way back to the gate. ^500 He lost one of his shoes among the cabbages, and the other shoe amongst the potatoes.<br>^800 After losing them, he ran on four legs and went faster, so that I think he might have got away altogether if^500 he had not unfortunately run into a gooseberry net, and got caught by the large buttons on his jacket.<br>^900 It was a blue jacket with brass buttons, quite new. Peter gave himself up for lost, and shed big tears; ^500 but his sobs were overheard by some friendly sparrows, who flew to him in great excitement, and implored him to exert himself.<br>^600 Mr. McGregor came up with a sieve, which he intended to pop upon the top of Peter;^300 but Peter wriggled out just in time, ^400 leaving his jacket behind him.^500 And rushed into the tool-shed,^500 and jumped into a can.<br>^400 It would have been a beautiful thing to hide in,^500 if it had not had so much water in it.^500<br> Mr. McGregor was quite sure that Peter was somewhere in the tool-shed, perhaps hidden underneath a flower-pot. He began to turn them over carefully, looking under each.^800 <br>Presently Peter sneezed--^500\'Kertyschoo!\'<br> Mr. McGregor was after him in no time. And tried to put his foot upon Peter,^100 who jumped out of a window, upsetting three plants.^200 The window was too small for Mr. McGregor, and he was tired of running after Peter. He went back to his work.^600<br>Peter sat down to rest;^400 he was out of breath and trembling with fright, and he had not the least idea which way to go.^200 Also he was very damp with sitting in that can.<br>After a time he began to wander about, going lippity--^500lippity--^300not very fast, and looking all round. He found a door in a wall;^400 but it was locked, and there was no room for a fat little rabbit to squeeze underneath. ^600<br>An old mouse was running in and out over the stone doorstep,^400 carrying peas and beans to her family in the wood.^500 Peter asked her the way to the gate, but she had such a large pea in her mouth that she could not answer.^600 She only shook her head at him. Peter began to cry. <br> ^500Then he tried to find his way straight across the garden, but he became more and more puzzled.<br> Presently, he came to a pond ^300where Mr. McGregor filled his water-cans.^300 A white cat was staring at some gold-fish, she sat very, very still, but now and then the tip of her tail twitched as if it were alive.^400<br> Peter thought it best to go away without speaking to her;^200 he had heard about cats from his cousin, little Benjamin Bunny. <br>He went back towards the tool-shed, but suddenly, quite close to him, he heard the noise of a hoe^300--scr-r-ritch, scratch, scratch, scritch.^300 Peter scuttered underneath the bushes.^300 But presently, as nothing happened, he came out, and climbed upon a wheelbarrow and peeped over. <br>The first thing he saw was Mr. McGregor hoeing onions. His back was turned towards Peter, and beyond him was the gate!<br> ^400Peter got down very quietly off the wheelbarrow; and started running as fast as he could go, along a straight walk behind some black-currant bushes. ^400 <br>Mr. McGregor caught sight of him at the corner, but Peter did not care. He slipped underneath the gate, and was safe at last in the wood outside the garden. ^200<br>Mr. McGregor hung up the little jacket and the shoes for a scare-crow to frighten the blackbirds.<br> Peter never stopped running or looked behind him till he got home to the big fir-tree.<br>^500He was so tired that he flopped down upon the nice soft sand on the floor of the rabbit-hole and shut his eyes. ^300<br>His mother was busy cooking; she wondered what he had done with his clothes. It was the second little jacket and pair of shoes that Peter had lost in a fortnight!<br> ^500I am sorry to say that Peter was not very well during the evening. ^300<br> His mother put him to bed, and made some camomile tea; and she gave a dose of it to Peter! ^500 <br>\'One table-spoonful to be taken at bed-time.\'<br> But Flopsy, Mopsy, and Cotton-tail had bread and milk and blackberries for supper.<h2>^300THE END</h2>\'</p>"],
        typeSpeed: 17,
        startDelay: 200,
        backSpeed: 100,
        backDelay: 400000,
        showCursor: false,
        contentType: 'html' });
    };
  });
};
/*
function displayImages(){
  $('#first').hide();
  $('#second').hide();
  $('#third').hide();
  $('#fourth').hide();
  $('#fifth').hide();
  $('#sixth').hide();
  $('#seventh').hide();
  var clicks = 0;
  $('#audio').click(function() {
      clicks ++;
    if(clicks%2 == 0 ){
      $('#images').hide();
      $('#card').show();
    }else if(clicks > 1 && clicks%2 != 0 ){
      $('#images').show();
      $('#card').hide();
    }else{
    $( "#first" ).show(10000);
    $( "#first" ).hide(10500);
    $( "#second" ).show(20000);
    $( "#second" ).hide(20000);
    $( "#third" ).show(40000);
    $( "#third" ).hide(20000);
    $( "#fourth" ).show(80000);
    $( "#fourth" ).hide(40000);
    $( "#fifth" ).show(100000);
    $( "#fifth" ).hide(50000);
    $( "#sixth" ).show(120000);
    $( "#sixth" ).hide(60000);
    $( "#seventh" ).show(140000);
    $( "#seventh" ).hide(70000);
  };
});
 };
*/
function scroll(){
  $('#histscroll').click(function() {
    $('#history').show();
    $('#story').hide();
  });
  $('#storyscroll').click(function() {
    $('#history').hide();
    $('#story').show();
  //  $('#images').show();
  });
};
