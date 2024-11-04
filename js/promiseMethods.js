//task1

const delayedPromise = (value, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value)
        }, delay)
    })
}

const fisrtPromise = delayedPromise('first promise', 1000);
const secondPromise = delayedPromise('second promise', 2000);
const thirdPromise = delayedPromise('third promise', 3000);
const fourthPromise = delayedPromise('fourth promise', 4000);
const fifthPromise = delayedPromise('fifth promise', 5000);


Promise.all([fisrtPromise, secondPromise, thirdPromise, fourthPromise, fifthPromise])
    .then(value => console.log(value))
    .catch(error => console.log(error))


//task2



const randomDelay = (delay) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(delay)
        }, delay)
    })
}

const promise1 = randomDelay((Math.floor(Math.random() * 5) + 1) * 1000)
const promise2 = randomDelay((Math.floor(Math.random() * 5) + 1) * 1000)
const promise3 = randomDelay((Math.floor(Math.random() * 5) + 1) * 1000)
const promise4 = randomDelay((Math.floor(Math.random() * 5) + 1) * 1000)
const promise5 = randomDelay((Math.floor(Math.random() * 5) + 1) * 1000)


Promise.race([promise1, promise2, promise3, promise4, promise5])
    .then(item => console.log(`затримка: ${item}ms`))
    .catch(error => console.log(error))







