var FormComponents = function () {

    var handleWysihtml5 = function () {
        if (!jQuery().wysihtml5) {
            return;
        }

        if ($('.wysihtml5').size() > 0) {
            $('.wysihtml5').wysihtml5();
        }
    }

    var handleToggleButtons = function () {
        if (!jQuery().toggleButtons) {
            return;
        }
        $('.basic-toggle-button').toggleButtons();
        $('.text-toggle-button').toggleButtons({
            width: 200,
            label: {
                enabled: "Lorem Ipsum",
                disabled: "Dolor Sit"
            }
        });
        $('.danger-toggle-button').toggleButtons({
            style: {

                enabled: "danger",
                disabled: "info"
            }
        });
        $('.info-toggle-button').toggleButtons({
            style: {
                enabled: "info",
                disabled: ""
            }
        });
        $('.success-toggle-button').toggleButtons({
            style: {
                enabled: "success",
                disabled: "info"
            }
        });
        $('.warning-toggle-button').toggleButtons({
            style: {
                enabled: "warning",
                disabled: "info"
            }
        });

        $('.height-toggle-button').toggleButtons({
            height: 100,
            font: {
                'line-height': '100px',
                'font-size': '20px',
                'font-style': 'italic'
            }
        });
    }

    var handleTagsInput = function () {
        if (!jQuery().tagsInput) {
            return;
        }
        $('#tags_1').tagsInput({
            width: 'auto',
            'onAddTag': function () {

            },
        });
        $('#tags_2').tagsInput({
            width: 240
        });
    }

    var handlejQueryUIDatePickers = function () {
        $( ".ui-date-picker" ).datepicker();
    }

    var handleDateTimePickers = function () {

        if (jQuery().datepicker) {
            $('.date-picker').datepicker();
        }

        if (jQuery().timepicker) {
            $('.timepicker-default').timepicker();
            $('.timepicker-24').timepicker({
                minuteStep: 1,
                showSeconds: true,
                showMeridian: false
            });
        }

        if (!jQuery().daterangepicker) {
            return;
        }

        $('.date-range').daterangepicker(
            {
                opens: (App.isRTL() ? 'left' : 'right'),
                format: 'MM/dd/yyyy',
                separator: ' to ',
                startDate: Date.today().add({
                    days: -29
                }),
                endDate: Date.today(),
                minDate: '01/01/2012',
                maxDate: '12/31/2014',
            }
        );

        $('#form-date-range').daterangepicker({
            ranges: {
                'Today': ['today', 'today'],
                'Yesterday': ['yesterday', 'yesterday'],
                'Last 7 Days': [Date.today().add({
                        days: -6
                    }), 'today'],
                'Last 29 Days': [Date.today().add({
                        days: -29
                    }), 'today'],
                'This Month': [Date.today().moveToFirstDayOfMonth(), Date.today().moveToLastDayOfMonth()],
                'Last Month': [Date.today().moveToFirstDayOfMonth().add({
                        months: -1
                    }), Date.today().moveToFirstDayOfMonth().add({
                        days: -1
                    })]
            },
            opens: (App.isRTL() ? 'left' : 'right'),
            format: 'MM/dd/yyyy',
            separator: ' to ',
            startDate: Date.today().add({
                days: -29
            }),
            endDate: Date.today(),
            minDate: '01/01/2012',
            maxDate: '12/31/2014',
            locale: {
                applyLabel: 'Submit',
                fromLabel: 'From',
                toLabel: 'To',
                customRangeLabel: 'Custom Range',
                daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                firstDay: 1
            },
            showWeekNumbers: true,
            buttonClasses: ['btn-danger']
        },

        function (start, end) {
            $('#form-date-range span').html(start.toString('MMMM d, yyyy') + ' - ' + end.toString('MMMM d, yyyy'));
        });

        $('#form-date-range span').html(Date.today().add({
            days: -29
        }).toString('MMMM d, yyyy') + ' - ' + Date.today().toString('MMMM d, yyyy'));


        if (!jQuery().datepicker || !jQuery().timepicker) {
            return;
        }
    }

    var handleNewDatetimePicker = function () {        

          $(".form_datetime").datetimepicker({
              format: "dd MM yyyy - hh:ii",
              pickerPosition: "bottom-left"
          });

         $(".form_advance_datetime").datetimepicker({
              format: "dd MM yyyy - hh:ii",
              autoclose: true,
              todayBtn: true,
              startDate: "2013-02-14 10:00",
              pickerPosition: "bottom-left",
              minuteStep: 10
          });

         $(".form_meridian_datetime").datetimepicker({
            format: "dd MM yyyy - HH:ii P",
            showMeridian: true,
            autoclose: true,
            pickerPosition: "bottom-left",
            todayBtn: true
        });
    }

    var handleClockfaceTimePickers = function () {

        if (!jQuery().clockface) {
            return;
        }

        $('#clockface_1').clockface();

        $('#clockface_2').clockface({
            format: 'HH:mm',
            trigger: 'manual'
        });

        $('#clockface_2_toggle-btn').click(function (e) {
            e.stopPropagation();
            $('#clockface_2').clockface('toggle');
        });

        $('#clockface_3').clockface({
            format: 'H:mm'
        }).clockface('show', '14:30');
    }

    var handleColorPicker = function () {
        if (!jQuery().colorpicker) {
            return;
        }
        $('.colorpicker-default').colorpicker({
            format: 'hex'
        });
        $('.colorpicker-rgba').colorpicker();
    }

    var handleSelec2 = function () {

        $('#select2_sample1').select2({
            placeholder: "Select an option",
            allowClear: true
        });

        $('#select2_sample2').select2({
            placeholder: "Select a State",
            allowClear: true
        });

        $("#select2_sample3").select2({
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

        function format(state) {
            if (!state.id) return state.text;
            return "<img class='flag' src='resource/metronic/img/flags/" + state.id.toLowerCase() + ".png'/>&nbsp;&nbsp;" + state.text;
        }
        $("#select2_sample4").select2({
            allowClear: true,
            formatResult: format,
            formatSelection: format,
            escapeMarkup: function (m) {
                return m;
            }
        });

        $("#select2_sample5").select2({
            tags: ["red", "green", "blue", "yellow", "pink"]
        });


        function movieFormatResult(movie) {
            var markup = "<table class='movie-result'><tr>";
            if (movie.posters !== undefined && movie.posters.thumbnail !== undefined) {
                markup += "<td valign='top'><img src='" + movie.posters.thumbnail + "'/></td>";
            }
            markup += "<td valign='top'><h5>" + movie.title + "</h5>";
            if (movie.critics_consensus !== undefined) {
                markup += "<div class='movie-synopsis'>" + movie.critics_consensus + "</div>";
            } else if (movie.synopsis !== undefined) {
                markup += "<div class='movie-synopsis'>" + movie.synopsis + "</div>";
            }
            markup += "</td></tr></table>"
            return markup;
        }

        function movieFormatSelection(movie) {
            return movie.title;
        }

        $("#select2_sample6").select2({
            placeholder: "Search for a movie",
            minimumInputLength: 1,
            ajax: {
                url: "http:
                dataType: 'jsonp',
                data: function (term, page) {
                    return {
                        q: term,
                        page_limit: 10,
                        apikey: "ju6z9mjyajq2djue3gbvv26t"
                    };
                },
                results: function (data, page) {

                    return {
                        results: data.movies
                    };
                }
            },
            initSelection: function (element, callback) {



                var id = $(element).val();
                if (id !== "") {
                    $.ajax("http:
                        data: {
                            apikey: "ju6z9mjyajq2djue3gbvv26t"
                        },
                        dataType: "jsonp"
                    }).done(function (data) {
                        callback(data);
                    });
                }
            },
            formatResult: movieFormatResult,
            formatSelection: movieFormatSelection,
            dropdownCssClass: "bigdrop",
            escapeMarkup: function (m) {
                return m;
            }
        });
    }

    var handleInputMasks = function () {
        $.extend($.inputmask.defaults, {
            'autounmask': true
        });

        $("#mask_date").inputmask("d/m/y", {autoUnmask: true});
        $("#mask_date1").inputmask("d/m/y",{ "placeholder": "*"});
        $("#mask_date2").inputmask("d/m/y",{ "placeholder": "dd/mm/yyyy" });
        $("#mask_phone").inputmask("mask", {"mask": "(999) 999-9999"});
        $("#mask_tin").inputmask({"mask": "99-9999999"});
        $("#mask_number").inputmask({ "mask": "9", "repeat": 10, "greedy": false });
        $("#mask_decimal").inputmask('decimal', { rightAlignNumerics: false });
        $("#mask_currency").inputmask('999.999.999,99', { numericInput: true });
        $("#mask_currency2").inputmask('999,999,999.99', { numericInput: true, rightAlignNumerics: false  });
        $("#mask_ssn").inputmask("999-99-9999", {placeholder:" ", clearMaskOnLostFocus: true });
    }

    var handleIPAddressInput = function () {
        $('#input_ipv4').ipAddress();
        $('#input_ipv6').ipAddress({v:6});
    }

    return {

        init: function () {
            handleWysihtml5();
            handleToggleButtons();
            handleTagsInput();
            handlejQueryUIDatePickers();
            handleDateTimePickers();
            handleNewDatetimePicker();
            handleClockfaceTimePickers();
            handleColorPicker();
            handleSelec2();
            handleInputMasks();
            handleIPAddressInput();
        }

    };

}();