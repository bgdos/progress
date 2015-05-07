
/**
 * ProgressBar for jQuery
 *
 * @version 1 (29. Dec 2012)
 * @author Ivan Lazarevic
 * @requires jQuery
 * @see http://workshop.rs
 *
 * @param  {Number} percent
 * @param  {Number} $element progressBar DOM element
 */
function progressBar(percent, element) {
    var progress =  element.find('div');
    if (percent <= 25)
        progress.addClass('progress-min');
    else if (percent <= 50 & percent > 25)
        progress.addClass('progress-mid');
    else if (percent <= 75 & percent > 50)
        progress.addClass('progress-average');
    else if(percent > 75)
        progress.addClass('progress');
	progress.animate({ width: percent + '%' }, 500).html(percent + "%&nbsp;");
}
