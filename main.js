const getObjectProperty = (obj, path, defaultValue) => {
    path = path.split('.')

    let value = obj
    for(let i = 0; i < path.length; i++) {
        value = value[path[i]]

        if(value == undefined) {
            value = defaultValue
            break
        }
    }

    return value
}


const obj = {
    pupa: {
        lupa: {
            beep: 'boop'
        },
        foo: 'bar'
    }
}


function unitTests() {
    const result = []

    const test = (description, a, b) => {
        if (a == b) {
            result.push({
                description,
                status: true
            })
        } else {
            result.push({
                description,
                status: false,
                parameter: {
                    expected: a,
                    actual: b
                }
            })
        }
    }

    test('', getObjectProperty(obj, 'pupa.lupa'), {beep: 'boop'})
    test('', getObjectProperty(obj, 'pupa.lupa.beep'), 'boop')
    test('', getObjectProperty(obj, 'pupa.foo'), 'bar')
    test('', getObjectProperty(obj, 'pupa.ne.tuda'),
        undefined)
    test('', getObjectProperty(obj, 'pupa.ne.tuda',
        true), true)
    test('', getObjectProperty(obj, 'pupa.ne.tuda',
        'Default value'), 'Default value')

    console.log(result)
}
unitTests()

