function handleClick(){
    $("button").addClass("btn-clr");
}
// $("button").click(handleClick);


// or can be also done as ---
$("button").on("click",handleClick);
