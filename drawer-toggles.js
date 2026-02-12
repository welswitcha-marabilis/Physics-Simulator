// a drawer toggle is a button (usually with an arrow) 
// that opens and closes a menu via moving it to the side (like a drawer)
// this file handles that behaviour

const drawerTogglesMap = [
    [document.querySelector('.right-UI-drawer-toggle'), document.querySelector('.right-UI'), "right", false], // bool for whether it is closed or not, 2nd index for closing direction.
    // will add other drawers later
]
// should match 2nd index of drawerTogglesMap values.
const dirMap = {
    closed: {
        left: "translateX(0)",
        right: "translateX(0)",
        up: "translateY(0)",
        down: "translateY(0)"
    },
    left: "translateX(-97%)",
    right: "translateX(97%)",
    up: "translateY(-97%)",
    down: "translateY(97%)"
}

drawerTogglesMap.forEach(([toggle, drawer, dir, isClosed]) => {
    toggle.addEventListener('click', () => {
        if (isClosed) {
            drawer.style.transform = dirMap[dir];
            isClosed = false;
        } else {
            drawer.style.transform = dirMap.closed[dir];
            isClosed = true;
        }
    });
});