// CB func Передается в асинхронную ф. в качестве параметра

const request = (cb) => {
    console.log('request');

    setTimeout(() => {
        console.log('response');
        cb();
    }, 2000)
}

const handler = () => {
    console.log('handler');
}

request(handler);

// The same, but with DATA
const request = (cb) => {
    console.log('request');

    setTimeout(() => {
        console.log('response');
        const data = { text: 'Hello' }
        cb(data);
    }, 2000)
}

const handler = (data) => {
    console.log('handler', data);
}

request(handler);

// Using the unNamed function as CB
const request = (cb) => {
    console.log('request');

    setTimeout(() => {
        console.log('response');
        const data = { text: 'Hello' }
        cb(data);
    }, 2000)
}

request((data) => {
    console.log('Hello callback!', data);
});

// with error using
const request = (cb) => {
    console.log('request');

    cb({ text: 'Error' });

    setTimeout(() => {
        console.log('response');
        const data = { text: 'Hello' }
        cb(null, data);
    }, 2000)
}

request((err, data) => {
    if (!err) {
        console.log('Hello callback!', data);
    } else {
        console.error(err);
    }
    
});