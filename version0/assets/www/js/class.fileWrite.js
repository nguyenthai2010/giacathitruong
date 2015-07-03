var fileWrite = (function(){
	var results = '';
	var filename = '';
	//FUNCTIONS	
    function run(file, data) {
		results = data;
		filename = file;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }

    function gotFS(fileSystem) {
		fileSystem.root.getDirectory('data', {create: true, exclusive: false},
			function(directory) {
				directory.getDirectory('gaicathitruong', {create: true, exclusive: false},
					function(subdirectory) {
						subdirectory.getFile(filename, {create: true, exclusive: false}, gotFileEntry, fail);		
					}, fail);
			}, fail);
    }

	// write file
    function gotFileEntry(fileEntry) {
        fileEntry.createWriter(gotFileWriter, fail);
    }
		
    function gotFileWriter(writer) {
        writer.write(results);
    }
	
    function fail(error) {
        alert("error:" + error.code);
    }
		
	//RETURN
	return{
		run:run
	}
})();
