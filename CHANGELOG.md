Release Notes
=============

0.0.4
-----

* Removed the 'length' event; it didn't serve any purpose.

* Removed passing through the data (re-emitting it) so the stream can be used duplex.

0.0.3
-----

* Added a BER encoder.

* Added a new function, encodeKLV, to encode a key and value buffer into a KLV.

0.0.2
-----

* Fixed compatibilty issues with Node versions < 0.8. 0.4 and 0.6 unit tests pass.

0.0.1
-----

* Initial release