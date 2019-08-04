/**
 * Shim for adding concat function to Buffer for versions of Node < 0.8
 *
 * https://github.com/polotek/procstreams/blob/master/compat/buffer.js
 */

if (!Buffer.concat) {

  Buffer.concat = function (list, length) {
    if (!Array.isArray(list)) {
      throw new Error('Usage: Buffer.concat(list, [length])');
    }

    if (list.length === 0) {
      return new Buffer.alloc(0);
    } else if (list.length === 1) {
      return list[0];
    }

    if (typeof length !== 'number') {
      length = 0;
      for (var i = 0; i < list.length; i++) {
        var buf = list[i];
        length += buf.length;
      }
    }

    var buffer = new Buffer.alloc(length);
    var pos = 0;
    for (var i = 0; i < list.length; i++) {
      var buf = list[i];
      buf.copy(buffer, pos);
      pos += buf.length;
    }
    return buffer;
  };

}