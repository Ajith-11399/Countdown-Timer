const disp = document.getElementById("display");
const button = document.getElementById("click");

button.addEventListener("click", () => {
    setTimeout( () => {
        disp.value = "10";
        setTimeout( () => {
            disp.value = "9";
            setTimeout( () => {
                disp.value = "8";
                setTimeout( () => {
                    disp.value = "7";
                    setTimeout( () => {
                        disp.value = "6";
                        setTimeout( () => {
                            disp.value = "5";
                            setTimeout( () => {
                                disp.value = "4";
                                setTimeout( () => {
                                    disp.value = "3";
                                    setTimeout( () => {
                                        disp.value = "2";
                                        setTimeout( () => {
                                            disp.value = "1";
                                            setTimeout( () => {
                                                disp.value = "HAPPY INDEPENDENCE DAY 🎉🎆";
                                                setTimeout( () => {
                                                    confirm("Now You can close the tab! Thank You");
                                                }, 4000);
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});