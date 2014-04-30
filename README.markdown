#jQuery Key Sequence Detector Plugin
##What?
This plugin watches for a sequence of characters to be typed, and executes some function when detected.

Checkout `demo.html` for an example.

##How?
Suppose you have this script:

	$(window).keySequenceDetector('boom', function(){ alert('goes the dynamite'); });

The plugin will pop up an alert box whenever the user types in the four consecutive letters b-o-o-m.

##Note!
This plugin allows you to keep on chaining, so, for example:

    $('#myelement').keySequenceDetector().css({border:'1px solid blue'});

Would run `keySequenceDetector` on `#myelement` then add a blue border to it after.

##Options:

The following options can be provided like so (default values specified):

    $('.yourSelector').keySequenceDetector({
	
         wildcard: '.'

    });      

##Whats next?

The world!

##Found a bug? 

Submit a bug report above or [here](https://github.com/mharen/jquery-key-sequence-detector-plugin/issues)

Or ping me on [Twitter](http://www.twitter.com/mharen) or on my [blog](http://blog.wassupy.com)
