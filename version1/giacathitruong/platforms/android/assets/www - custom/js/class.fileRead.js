var fileRead = (function(){
	var filename = '';
	var returnDiv = '';
	//FUNCTIONS	
    function run(file, divID) {
		returnDiv = divID;
		filename = file;
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    }

    function gotFS(fileSystem) {
		fileSystem.root.getDirectory('data', {create: true, exclusive: false},
			function(directory) {
				directory.getDirectory('gaicathitruong', {create: true, exclusive: false},
					function(subdirectory) {
						subdirectory.getFile(filename, null, gotFileEntry, fail);		
					}, fail);
			}, fail);	
    }

    function gotFileEntry(fileEntry) {
        fileEntry.file(gotFile, fail);
    }

    function gotFile(file){
        //readDataUrl(file);
        readAsText(file);
    }

    function readDataUrl(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("Read as data URL");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    }

    function readAsText(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
			$(returnDiv).html(evt.target.result);
        };
        reader.readAsText(file);
    }

    function fail(evt) {
        console.log(evt.target.error.code);
    }

	//RETURN
	return{
		run:run
	}
})();
