---
---

$(document).ready(function() {

    // burger menu toggle
    $(".navbar-burger").click(function() {
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

    {% for level in site.levels %}
    $("#add-level-filter-{{ level.category_name }}").click(function() {
        console.log("add level filter: {{ level.category_name }}");
        let searchParams = new URLSearchParams(window.location.search);

        //menu stuff
        $("#level-display").addClass("is-hidden");
        $("#remove-level-filter-{{ level.category_name }}").removeClass("is-hidden");

        // show selected katas
        $(".kata").addClass("is-hidden");
        if (searchParams.has('topic')) {
            $(".level-{{ level.category_name }}.topic-"+searchParams.get('topic')).removeClass("is-hidden");
        } else {
            $(".level-{{ level.category_name }}").removeClass("is-hidden");
        }

        // URL stuff
        let params = { level: "{{ level.category_name }}" };

        if (searchParams.has('topic')) {
            params.topic = searchParams.get('topic');
        }

        window.history.pushState("","", "?" + jQuery.param(params));
    });

    $("#remove-level-filter-{{ level.category_name }}").click(function() {
        console.log("remove level filter: {{ level.category_name }}");
        let searchParams = new URLSearchParams(window.location.search);

        //menu stuff
        $("#level-display").removeClass("is-hidden");
        $("#remove-level-filter-{{ level.category_name }}").addClass("is-hidden");

        // show selected katas
        if (searchParams.has('topic')) {
            $(".topic-"+searchParams.get('topic')).removeClass("is-hidden");
        } else {
            $(".kata").removeClass("is-hidden");
        }

        // URL stuff
        let newUrl = "/katas.html";
        if (searchParams.has('topic')) {
            newUrl += "?topic=" + searchParams.get('topic');
        }
        window.history.pushState("","", newUrl);
    });
    {% endfor %}

    {% for topic in site.topics %}
    $("#add-topic-filter-{{ topic.category_name | remove: ' ' }}").click(function() {
        console.log("add topic filter: {{ topic.category_name }}");
        let searchParams = new URLSearchParams(window.location.search);

        //menu stuff
        $("#topic-display").addClass("is-hidden");
        $("#remove-topic-filter-{{ topic.category_name  | remove: ' '}}").removeClass("is-hidden");

        // show selected katas
        $(".kata").addClass("is-hidden");
        if (searchParams.has('level')) {
            $(".topic-{{ topic.category_name | remove: ' ' }}.level-" + searchParams.get('level')).removeClass("is-hidden");
        } else {
            $(".topic-{{ topic.category_name | remove: ' ' }}").removeClass("is-hidden");
        }

        // URL stuff
        let params = { topic: "{{ topic.category_name | remove: ' ' }}" };

        if (searchParams.has('level')) {
            params.level = searchParams.get('level');
        }

        window.history.pushState("","", "?" + jQuery.param(params));
    });

    $("#remove-topic-filter-{{ topic.category_name | remove: ' ' }}").click(function() {
        console.log("remove topic filter: {{ topic.category_name }}");
        let searchParams = new URLSearchParams(window.location.search);

        //menu stuff
        $("#topic-display").removeClass("is-hidden");
        $("#remove-topic-filter-{{ topic.category_name | remove: ' ' }}").addClass("is-hidden");

        // show selected katas
        if (searchParams.has('level')) {
            $(".level-" + searchParams.get('level')).removeClass("is-hidden");
        } else {
            $(".kata").removeClass("is-hidden");
        }

        // URL stuff
        let newUrl = "/katas.html";
        if (searchParams.has('level')) {
            newUrl += "?level=" + searchParams.get('level');
        }
        window.history.pushState("","", newUrl);
    });
    {% endfor %}

    let searchParams = new URLSearchParams(window.location.search)

    if (searchParams.has('level')) {
        let level = searchParams.get('level');

        if ($("#add-level-filter-" + level).length ) {
            $("#add-level-filter-" + level).click();
        } else {
            alert("Your level filter '" + level + "' cannot be applied. Make sure there are no typos in your url.");
        }
    }

    if (searchParams.has('topic')) {
        let topic = searchParams.get('topic');

        if ($("#add-topic-filter-" + topic).length ) {
            $("#add-topic-filter-" + topic).click();
        } else {
            alert("Your topic filter '" + topic + "' cannot be applied. Make sure there are no typos in your url.");
        }
    }

});
