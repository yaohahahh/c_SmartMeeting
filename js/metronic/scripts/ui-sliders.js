var UISliders = function () {

    return {

        initSliders: function () {

            $(".slider-basic").slider();


            $("#slider-snap-inc").slider({
                value: 100,
                min: 0,
                max: 1000,
                step: 100,
                slide: function (event, ui) {
                    $("#slider-snap-inc-amount").text("$" + ui.value);
                }
            });

            $("#slider-snap-inc-amount").text("$" + $("#slider-snap-inc").slider("value"));


            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#slider-range-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#slider-range-amount").text("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1));



            $("#slider-range-max").slider({
                range: "max",
                min: 1,
                max: 10,
                value: 2,
                slide: function (event, ui) {
                    $("#slider-range-max-amount").text(ui.value);
                }
            });

            $("#slider-range-max-amount").text($("#slider-range-max").slider("value"));


            $("#slider-range-min").slider({
                range: "min",
                value: 37,
                min: 1,
                max: 700,
                slide: function (event, ui) {
                    $("#slider-range-min-amount").text("$" + ui.value);
                }
            });

            $("#slider-range-min-amount").text("$" + $("#slider-range-min").slider("value"));



            $("#slider-eq > span").each(function () {

                var value = parseInt($(this).text(), 10);
                $(this).empty().slider({
                    value: value,
                    range: "min",
                    animate: true,
                    orientation: "vertical"
                });
            });


            $("#slider-vertical").slider({
                orientation: "vertical",
                range: "min",
                min: 0,
                max: 100,
                value: 60,
                slide: function (event, ui) {
                    $("#slider-vertical-amount").text(ui.value);
                }
            });
            $("#slider-vertical-amount").text($("#slider-vertical").slider("value"));


            $("#slider-range-vertical").slider({
                orientation: "vertical",
                range: true,
                values: [17, 67],
                slide: function (event, ui) {
                    $("#slider-range-vertical-amount").text("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });

            $("#slider-range-vertical-amount").text("$" + $("#slider-range-vertical").slider("values", 0) + " - $" + $("#slider-range-vertical").slider("values", 1));

        },

        initKnowElements: function () {

            if (!jQuery().knob || App.isIE8()) {
                return;
            }

            $(".knob").knob({
                'dynamicDraw': true,
                'thickness': 0.2,
                'tickColorizeValues': true,
                'skin': 'tron'
            });

            if ($(".knobify").size() > 0) {
                $(".knobify").knob({
                    readOnly: true,
                    skin: "tron",
                    'width': 100,
                    'height': 100,
                    'dynamicDraw': true,
                    'thickness': 0.2,
                    'tickColorizeValues': true,
                    'skin': 'tron',
                    draw: function () {

                        if (this.$.data('skin') == 'tron') {

                            var a = this.angle(this.cv)
                                ,
                                sa = this.startAngle
                                ,
                                sat = this.startAngle
                                ,
                                ea
                                ,
                                eat = sat + a
                                ,
                                r = 1;

                            this.g.lineWidth = this.lineWidth;

                            this.o.cursor && (sat = eat - 0.3) && (eat = eat + 0.3);

                            if (this.o.displayPrevious) {
                                ea = this.startAngle + this.angle(this.v);
                                this.o.cursor && (sa = ea - 0.3) && (ea = ea + 0.3);
                                this.g.beginPath();
                                this.g.strokeStyle = this.pColor;
                                this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
                                this.g.stroke();
                            }

                            this.g.beginPath();
                            this.g.strokeStyle = r ? this.o.fgColor : this.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
                            this.g.stroke();

                            this.g.lineWidth = 2;
                            this.g.beginPath();
                            this.g.strokeStyle = this.o.fgColor;
                            this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
                            this.g.stroke();

                            return false;

                        }
                    }
                });
            }
        }

    };

}();