function returnAnswer() {
    function getAnswer() {
        let num = Math.floor(Math.random() * 8);

        switch (num) {
            case 0:
                return "That is a resounding NO.";
                break;
            case 1:
                return "Improbible, but not impossible!";
                break;
            case 2:
                return "I highly doubt it...";
                break;
                
            case 3:
                return "Oh, absolutley!";
                break;
            case 4:
                return "Yes, but not in the way you think.";
                break;
            case 5:
                return "No, but not in the way you think.";
                break;
            case 6:
                return "HA! No way!";
                break;
            case 7:
                return "I dunno, probably.";
                break;
            default:
                return "Hmmm something went amiss. Try again."
        }


    }

    document.getElementById("answer").innerHTML = getAnswer();
}

document.getElementById("ask").onclick = function(){returnAnswer()};