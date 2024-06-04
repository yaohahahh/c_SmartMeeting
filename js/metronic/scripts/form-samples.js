var FormSamples = function () {


    return {

        init: function () {


            $('.select2_category').select2({
	            placeholder: "Select an option",
	            allowClear: true
	        });

            $('.select2_sample1').select2({
                placeholder: "Select a State",
                allowClear: true
            });

            $(".select2_sample2").select2({
                allowClear: true,
                minimumInputLength: 1,
                query: function (query) {
                    var data = {
                        results: []
                    }, i, j, s;
                    for (i = 1; i < 5; i++) {
                        s = "";
                        for (j = 0; j < i; j++) {
                            s = s + query.term;
                        }
                        data.results.push({
                            id: query.term + i,
                            text: s
                        });
                    }
                    query.callback(data);
                }
            });

            $(".select2_sample3").select2({
                tags: ["red", "green", "blue", "yellow", "pink"]
            });

        }

    };

}();