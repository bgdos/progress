function progress()
{
    var values = [25, 50, 75, 90, 68, 45, 22];
    var i = 0;
    $('#progress:first-child').each(function() { 
		$(this).find('div').addClass ="v"+i;
        progressBar(values[i], $(this));
        i++;
    });
}
function openMenu()
{
    $("sidebar").toggle(500);   
}
