jQuery( function ( $ ) {
    'use strict';

    // Menu dropdown
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass('open');
        $(this).parent().toggleClass('open');
    });


    $( 'select' ).addClass( 'form-control' );

    // The WordPress Default Widgets
    // Now we'll add some classes for the WordPress default widgets - let's go
    $( ".widget").wrapInner("<div class='card-body'></div>");
    $( 'table#wp-calendar' ).addClass( 'table table-striped');

    // Comment Form
    $( '.comment-form-author > input' ).addClass( 'form-control' );
    $( '.comment-form-email > input' ).addClass( 'form-control' );
    $( '.comment-form-url > input' ).addClass( 'form-control' );
    $('.comment-reply-link').addClass('btn btn-primary');
    $('#commentsubmit').addClass('btn btn-primary');

    // Password Form
    $( '.post-password-form > p > label > input' ).addClass( 'form-control' );
    $( '.post-password-form > p >  input' ).addClass( 'btn btn-primary' );

});

function educational_zone_openNav() {
  window.educational_zone_RespoMenu=true;
  jQuery(".sidenav").addClass('show');
}
function educational_zone_closeNav() {
  window.educational_zone_RespoMenu=false;
  jQuery(".sidenav").removeClass('show');
}

window.educational_zone_currentfocus=null;
educational_zone_checkfocusdElement();
var educational_zone_body = document.querySelector('body');
educational_zone_body.addEventListener('keyup', educational_zone_check_tab_press);
var educational_zone_gotoHome = false;
var educational_zone_gotoClose = false;
window.educational_zone_RespoMenu=false;
function educational_zone_checkfocusdElement(){
if(window.educational_zone_currentfocus=document.activeElement.className){
  window.educational_zone_currentfocus=document.activeElement.className;
}
}
function educational_zone_check_tab_press(e) {
"use strict";
e = e || event;
var activeElement;
if(window.innerWidth < 999){
if (e.keyCode == 9) {
  if(window.educational_zone_RespoMenu){
  if (!e.shiftKey) {
    if(educational_zone_gotoHome) {
      jQuery( ".menu ul:first li:first a:first-child" ).focus();
    }
  }
  if (jQuery("a.closebtn.mobile-menu").is(":focus")) {
    educational_zone_gotoHome = true;
  } else {
    educational_zone_gotoHome = false;
  }
}else{
  if(window.educational_zone_currentfocus=="mobiletoggle"){
    jQuery( "" ).focus();
  }}}
}
if (e.shiftKey && e.keyCode == 9) {
if(window.innerWidth < 999){
  if(window.educational_zone_currentfocus=="header-search"){
    jQuery(".mobiletoggle").focus();
  }else{
    if(window.educational_zone_RespoMenu){
    if(educational_zone_gotoClose){
      jQuery("a.closebtn.mobile-menu").focus();
    }
    if (jQuery( ".menu ul:first li:first a:first-child" ).is(":focus")) {
      educational_zone_gotoClose = true;
    } else {
      educational_zone_gotoClose = false;
    }
  }else{
  if(window.educational_zone_RespoMenu){
  }}}}
}
educational_zone_checkfocusdElement();
}