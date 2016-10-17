/**
 * Created by rakeshchouhan on 10/16/16.
 */
// Throws with a ReferenceError because b is undefined  
try {
    const a = 1;
    const c = a + b;
} catch (err) {
    console.log(err);
}
/*
 Chouhan:NodePlayByPlay rakeshchouhan$ node errors/jserrors.js
 [ReferenceError: b is not defined]
 */
