$("#request").on("click",function(){
    var request=$.get("http://localhost:590/");
    request.done(function(data){
        console.log(data);
    });
    request.fail(function(jqXHR,textStatus,errorThrown){
        console.log(textStatus,errorThrown);
    });
});
