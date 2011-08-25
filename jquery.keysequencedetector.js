/*
	Created by Michael Haren, mharen@gmail.com
	Twitter @mharen
	Web http://blog.wassupy.com
	
	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:
	
	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
	NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
	LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
	OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
	WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
;(function($){

	// sequence: a string of characters to watch for
	// action: a function to execute when the sequence is detected
	// options: a hash of additional options
	jQuery.fn.keySequenceDetector = function(sequence, action, options) {
		var settings = $.extend({}, $.fn.keySequenceDetector.defaultOptions, options);
		
		return this.each(function() {
			var i = 0;
			$(this).keypress(function(e) {
				// decode the character code into the actual letter typed
				var key = String.fromCharCode(e.which);
				
				// see if it's the next key in the sequence
				if (sequence[i] === key) {
					// it was! 
					++i;
					
					// is the sequence complete?
					if (sequence.length === i) {
						i = 0;
						action();
					}
				}
				else {
					// sequence broken
					// reset to first character if that's what broke the sequence
					// or nothing, otherwise
					i = +(sequence[0] === key);
				}
			});
		});
	};

	$.fn.keySequenceDetector.defaultOptions = { 
		// none yet!
	};

})(jQuery);