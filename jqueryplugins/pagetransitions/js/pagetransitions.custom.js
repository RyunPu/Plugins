;(function($, window, undefined) {
    
    'use strict';

    $.PageTransitions = function(options, element) {
        this.defaults = {
            animation: '1',
            showPage: 0,
            keyboardControl: false,
            keys: {
                BACKSPACE: 8,
                DOWN: 40,
                ENTER: 13,
                LEFT: 37,
                RIGHT: 39,
                SPACE: 32,
                PAGE_DOWN: 34,
                PAGE_UP: 38
            },
            bind: null
        };

        this.$el = $(element);
        this.cfgs = $.extend(true, {}, this.defaults, options);
        this._init(options);
    };

    $.PageTransitions.prototype = {
        _init: function(options) {
            this.$pages = this.$el.children('.pt-page');
            this.pagesCount = this.$pages.length;
            this.current = 0;
            this.isAnimating = false;
            this.endCurrPage = false;
            this.endNextPage = false;

            this.$pages.each(function(index, el) {
                $(el).data('originalClassList', $(el).attr('class'));
            });

            this.$pages.eq(this.current).addClass('pt-page-current');

            if (typeof this.cfgs.bind === 'function') {
                this.cfgs.bind(this);
            }

            if (typeof this.cfgs.keyboardControl) {
                this.bindKeyboard();
            }
        },
        bindKeyboard: function() {
            var self = this,
                keys = self.cfgs.keys;

            $('body').off('keyup.PageTransitions');
            $('body').on('keyup.PageTransitions', function(event) {
                var key = event.which;

                if (key == keys.RIGHT || key == keys.SPACE || key == keys.ENTER || key == keys.DOWN || key == keys.PAGE_DOWN) {
                    self.nextPage();
                }

                if (key == keys.LEFT || key == keys.BACKSPACE || key == keys.PAGE_UP) {
                    self.nextPage(true);
                }
            });
        },
        nextPage: function(back) {
            var self = this,
                animation = parseInt(this.cfgs.animation),
                animEndEventName = 'webkitAnimationEnd',
                outClass = '',
                inClass = '',
                $currPage,
                $nextPage;

            if (this.isAnimating) return;

            this.isAnimating = true;

            $currPage = this.$pages.eq(this.current);

            if (this.cfgs.showPage > 0) {
                if (this.cfgs.showPage < this.pagesCount - 1) {
                    this.current = this.cfgs.showPage;
                } else {
                    this.current = 0;
                }
            } else {
                if (back) {
                    if(this.current > 0) {
                        --this.current;
                    } else {
                        this.current = this.pagesCount - 1;
                    }
                } else {
                    if(this.current < this.pagesCount - 1) {
                        ++this.current;
                    } else {
                        this.current = 0;
                    }
                }
            }

            $nextPage = this.$pages.eq(this.current).addClass('pt-page-current');

            if (back) {
                switch (animation) {
                    case 1:
                        animation = 2;
                        break;
                    case 2:
                        animation = 1;
                        break;
                    case 3:
                        animation = 4;
                        break;
                    case 4:
                        animation = 3;
                        break;
                    case 5:
                        animation = 6;
                        break;
                    case 6:
                        animation = 5;
                        break;
                    case 7:
                        animation = 8;
                        break;
                    case 8:
                        animation = 7;
                        break;
                    case 9:
                        animation = 10;
                        break;
                    case 10:
                        animation = 9;
                        break;
                    case 11:
                        animation = 12;
                        break;
                    case 12:
                        animation = 11;
                        break;
                    case 13:
                        animation = 14;
                        break;
                    case 14:
                        animation = 13;
                        break;
                    case 15:
                        animation = 16;
                        break;
                    case 16:
                        animation = 15;
                        break;
                    case 17:
                        animation = 18;
                        break;
                    case 18:
                        animation = 17;
                        break;
                    case 19:
                        animation = 20;
                        break;
                    case 20:
                        animation = 19;
                        break;
                    case 21:
                        animation = 22;
                        break;
                    case 22:
                        animation = 21;
                        break;
                    case 23:
                        animation = 24;
                        break;
                    case 24:
                        animation = 23;
                        break;
                    case 25:
                        animation = 26;
                        break;
                    case 26:
                        animation = 25;
                        break;
                    case 28:
                        animation = 29;
                        break;
                    case 29:
                        animation = 28;
                        break;
                    case 30:
                        animation = 31;
                        break;
                    case 31:
                        animation = 30;
                        break;
                    case 32:
                        animation = 33;
                        break;
                    case 33:
                        animation = 32;
                        break;
                    case 34:
                        animation = 35;
                        break;
                    case 35:
                        animation = 34;
                        break;
                    case 38:
                        animation = 39;
                        break;
                    case 39:
                        animation = 38;
                        break;
                    case 40:
                        animation = 41;
                        break;
                    case 41:
                        animation = 40;
                        break;
                    case 42:
                        animation = 43;
                        break;
                    case 43:
                        animation = 42;
                        break;
                    case 44:
                        animation = 45;
                        break;
                    case 45:
                        animation = 44;
                        break;
                    case 46:
                        animation = 47;
                        break;
                    case 47:
                        animation = 46;
                        break;
                    case 48:
                        animation = 49;
                        break;
                    case 49:
                        animation = 48;
                        break;
                    case 50:
                        animation = 51;
                        break;
                    case 51:
                        animation = 50;
                        break;
                    case 52:
                        animation = 53;
                        break;
                    case 53:
                        animation = 52;
                        break;
                    case 54:
                        animation = 55;
                        break;
                    case 55:
                        animation = 54;
                        break;
                    case 56:
                        animation = 57;
                        break;
                    case 57:
                        animation = 56;
                        break;
                    case 58:
                        animation = 59;
                        break;
                    case 59:
                        animation = 58;
                        break;
                    case 60:
                        animation = 61;
                        break;
                    case 61:
                        animation = 60;
                        break;
                    case 62:
                        animation = 63;
                        break;
                    case 63:
                        animation = 62;
                        break;
                    case 64:
                        animation = 65;
                        break;
                    case 65:
                        animation = 64;
                        break;
                }
            }

            switch (animation) {
                case 1:
                    outClass = 'pt-page-moveToLeft';
                    inClass = 'pt-page-moveFromRight';
                    break;
                case 2:
                    outClass = 'pt-page-moveToRight';
                    inClass = 'pt-page-moveFromLeft';
                    break;
                case 3:
                    outClass = 'pt-page-moveToTop';
                    inClass = 'pt-page-moveFromBottom';
                    break;
                case 4:
                    outClass = 'pt-page-moveToBottom';
                    inClass = 'pt-page-moveFromTop';
                    break;
                case 5:
                    outClass = 'pt-page-fade';
                    inClass = 'pt-page-moveFromRight pt-page-ontop';
                    break;
                case 6:
                    outClass = 'pt-page-fade';
                    inClass = 'pt-page-moveFromLeft pt-page-ontop';
                    break;
                case 7:
                    outClass = 'pt-page-fade';
                    inClass = 'pt-page-moveFromBottom pt-page-ontop';
                    break;
                case 8:
                    outClass = 'pt-page-fade';
                    inClass = 'pt-page-moveFromTop pt-page-ontop';
                    break;
                case 9:
                    outClass = 'pt-page-moveToLeftFade';
                    inClass = 'pt-page-moveFromRightFade';
                    break;
                case 10:
                    outClass = 'pt-page-moveToRightFade';
                    inClass = 'pt-page-moveFromLeftFade';
                    break;
                case 11:
                    outClass = 'pt-page-moveToTopFade';
                    inClass = 'pt-page-moveFromBottomFade';
                    break;
                case 12:
                    outClass = 'pt-page-moveToBottomFade';
                    inClass = 'pt-page-moveFromTopFade';
                    break;
                case 13:
                    outClass = 'pt-page-moveToLeftEasing pt-page-ontop';
                    inClass = 'pt-page-moveFromRight';
                    break;
                case 14:
                    outClass = 'pt-page-moveToRightEasing pt-page-ontop';
                    inClass = 'pt-page-moveFromLeft';
                    break;
                case 15:
                    outClass = 'pt-page-moveToTopEasing pt-page-ontop';
                    inClass = 'pt-page-moveFromBottom';
                    break;
                case 16:
                    outClass = 'pt-page-moveToBottomEasing pt-page-ontop';
                    inClass = 'pt-page-moveFromTop';
                    break;
                case 17:
                    outClass = 'pt-page-scaleDown';
                    inClass = 'pt-page-moveFromRight pt-page-ontop';
                    break;
                case 18:
                    outClass = 'pt-page-scaleDown';
                    inClass = 'pt-page-moveFromLeft pt-page-ontop';
                    break;
                case 19:
                    outClass = 'pt-page-scaleDown';
                    inClass = 'pt-page-moveFromBottom pt-page-ontop';
                    break;
                case 20:
                    outClass = 'pt-page-scaleDown';
                    inClass = 'pt-page-moveFromTop pt-page-ontop';
                    break;
                case 21:
                    outClass = 'pt-page-scaleDown';
                    inClass = 'pt-page-scaleUpDown pt-page-delay300';
                    break;
                case 22:
                    outClass = 'pt-page-scaleDownUp';
                    inClass = 'pt-page-scaleUp pt-page-delay300';
                    break;
                case 23:
                    outClass = 'pt-page-moveToLeft pt-page-ontop';
                    inClass = 'pt-page-scaleUp';
                    break;
                case 24:
                    outClass = 'pt-page-moveToRight pt-page-ontop';
                    inClass = 'pt-page-scaleUp';
                    break;
                case 25:
                    outClass = 'pt-page-moveToTop pt-page-ontop';
                    inClass = 'pt-page-scaleUp';
                    break;
                case 26:
                    outClass = 'pt-page-moveToBottom pt-page-ontop';
                    inClass = 'pt-page-scaleUp';
                    break;
                case 27:
                    outClass = 'pt-page-scaleDownCenter';
                    inClass = 'pt-page-scaleUpCenter pt-page-delay400';
                    break;
                case 28:
                    outClass = 'pt-page-rotateRightSideFirst';
                    inClass = 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop';
                    break;
                case 29:
                    outClass = 'pt-page-rotateLeftSideFirst';
                    inClass = 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop';
                    break;
                case 30:
                    outClass = 'pt-page-rotateTopSideFirst';
                    inClass = 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop';
                    break;
                case 31:
                    outClass = 'pt-page-rotateBottomSideFirst';
                    inClass = 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop';
                    break;
                case 32:
                    outClass = 'pt-page-flipOutRight';
                    inClass = 'pt-page-flipInLeft pt-page-delay500';
                    break;
                case 33:
                    outClass = 'pt-page-flipOutLeft';
                    inClass = 'pt-page-flipInRight pt-page-delay500';
                    break;
                case 34:
                    outClass = 'pt-page-flipOutTop';
                    inClass = 'pt-page-flipInBottom pt-page-delay500';
                    break;
                case 35:
                    outClass = 'pt-page-flipOutBottom';
                    inClass = 'pt-page-flipInTop pt-page-delay500';
                    break;
                case 36:
                    outClass = 'pt-page-rotateFall pt-page-ontop';
                    inClass = 'pt-page-scaleUp';
                    break;
                case 37:
                    outClass = 'pt-page-rotateOutNewspaper';
                    inClass = 'pt-page-rotateInNewspaper pt-page-delay500';
                    break;
                case 38:
                    outClass = 'pt-page-rotatePushLeft';
                    inClass = 'pt-page-moveFromRight';
                    break;
                case 39:
                    outClass = 'pt-page-rotatePushRight';
                    inClass = 'pt-page-moveFromLeft';
                    break;
                case 40:
                    outClass = 'pt-page-rotatePushTop';
                    inClass = 'pt-page-moveFromBottom';
                    break;
                case 41:
                    outClass = 'pt-page-rotatePushBottom';
                    inClass = 'pt-page-moveFromTop';
                    break;
                case 42:
                    outClass = 'pt-page-rotatePushLeft';
                    inClass = 'pt-page-rotatePullRight pt-page-delay180';
                    break;
                case 43:
                    outClass = 'pt-page-rotatePushRight';
                    inClass = 'pt-page-rotatePullLeft pt-page-delay180';
                    break;
                case 44:
                    outClass = 'pt-page-rotatePushTop';
                    inClass = 'pt-page-rotatePullBottom pt-page-delay180';
                    break;
                case 45:
                    outClass = 'pt-page-rotatePushBottom';
                    inClass = 'pt-page-rotatePullTop pt-page-delay180';
                    break;
                case 46:
                    outClass = 'pt-page-rotateFoldLeft';
                    inClass = 'pt-page-moveFromRightFade';
                    break;
                case 47:
                    outClass = 'pt-page-rotateFoldRight';
                    inClass = 'pt-page-moveFromLeftFade';
                    break;
                case 48:
                    outClass = 'pt-page-rotateFoldTop';
                    inClass = 'pt-page-moveFromBottomFade';
                    break;
                case 49:
                    outClass = 'pt-page-rotateFoldBottom';
                    inClass = 'pt-page-moveFromTopFade';
                    break;
                case 50:
                    outClass = 'pt-page-moveToRightFade';
                    inClass = 'pt-page-rotateUnfoldLeft';
                    break;
                case 51:
                    outClass = 'pt-page-moveToLeftFade';
                    inClass = 'pt-page-rotateUnfoldRight';
                    break;
                case 52:
                    outClass = 'pt-page-moveToBottomFade';
                    inClass = 'pt-page-rotateUnfoldTop';
                    break;
                case 53:
                    outClass = 'pt-page-moveToTopFade';
                    inClass = 'pt-page-rotateUnfoldBottom';
                    break;
                case 54:
                    outClass = 'pt-page-rotateRoomLeftOut pt-page-ontop';
                    inClass = 'pt-page-rotateRoomLeftIn';
                    break;
                case 55:
                    outClass = 'pt-page-rotateRoomRightOut pt-page-ontop';
                    inClass = 'pt-page-rotateRoomRightIn';
                    break;
                case 56:
                    outClass = 'pt-page-rotateRoomTopOut pt-page-ontop';
                    inClass = 'pt-page-rotateRoomTopIn';
                    break;
                case 57:
                    outClass = 'pt-page-rotateRoomBottomOut pt-page-ontop';
                    inClass = 'pt-page-rotateRoomBottomIn';
                    break;
                case 58:
                    outClass = 'pt-page-rotateCubeLeftOut pt-page-ontop';
                    inClass = 'pt-page-rotateCubeLeftIn';
                    break;
                case 59:
                    outClass = 'pt-page-rotateCubeRightOut pt-page-ontop';
                    inClass = 'pt-page-rotateCubeRightIn';
                    break;
                case 60:
                    outClass = 'pt-page-rotateCubeTopOut pt-page-ontop';
                    inClass = 'pt-page-rotateCubeTopIn';
                    break;
                case 61:
                    outClass = 'pt-page-rotateCubeBottomOut pt-page-ontop';
                    inClass = 'pt-page-rotateCubeBottomIn';
                    break;
                case 62:
                    outClass = 'pt-page-rotateCarouselLeftOut pt-page-ontop';
                    inClass = 'pt-page-rotateCarouselLeftIn';
                    break;
                case 63:
                    outClass = 'pt-page-rotateCarouselRightOut pt-page-ontop';
                    inClass = 'pt-page-rotateCarouselRightIn';
                    break;
                case 64:
                    outClass = 'pt-page-rotateCarouselTopOut pt-page-ontop';
                    inClass = 'pt-page-rotateCarouselTopIn';
                    break;
                case 65:
                    outClass = 'pt-page-rotateCarouselBottomOut pt-page-ontop';
                    inClass = 'pt-page-rotateCarouselBottomIn';
                    break;
                case 66:
                    outClass = 'pt-page-rotateSidesOut';
                    inClass = 'pt-page-rotateSidesIn pt-page-delay200';
                    break;
                case 67:
                    outClass = 'pt-page-rotateSlideOut';
                    inClass = 'pt-page-rotateSlideIn';
                    break;
            }

            $currPage.addClass(outClass).on(animEndEventName, function() {
                $currPage.off(animEndEventName);
                self.endCurrPage = true;
                if (self.endNextPage) self.onEndAnimation($currPage, $nextPage);
            });

            $nextPage.addClass(inClass).on(animEndEventName, function() {
                $nextPage.off(animEndEventName);
                self.endNextPage = true;
                if (self.endCurrPage) self.onEndAnimation($currPage, $nextPage);
            });
        },
        onEndAnimation: function($outpage, $inpage) {
            this.endCurrPage = false;
            this.endNextPage = false;
            this.resetPage($outpage, $inpage);
            this.isAnimating = false;
        },
        resetPage: function($outpage, $inpage) {
            $outpage.attr('class', $outpage.data('originalClassList'));
            $inpage.attr('class', $inpage.data('originalClassList') + ' pt-page-current');
        }
    };

    $.fn.PageTransitions = function(options) {
        return this.each(function() {
            new $.PageTransitions(options, this);
        });
    };
})(jQuery, window);