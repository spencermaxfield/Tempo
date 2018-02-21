var fs = require("fs");
var Midi = require("jsmidgen");

var file = new Midi.File();
var track = new Midi.Track();
file.addTrack(track);

track.addNote(0, 'c4', 64);
track.addNote(0, 'd4', 64);
track.addNote(0, 'e4', 64);
track.addNote(0, 'f4', 64);
track.addNote(0, 'g4', 64);
track.addNote(0, 'a4', 64);
track.addNote(0, 'b4', 64);
track.addNote(0, 'c5', 64);

fs.writeFileSync('test.midi', file.toBytes(), 'binary');