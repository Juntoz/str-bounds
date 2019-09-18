function _ensureInit(path, char) {
    path = (path || '').trim();
    if (path.length > 0 && path[0] !== char) {
        path = char + path;
    }

    return path;
}

function _ensureFinal(path, char) {
    path = (path || '').trim();
    if (path.length > 0 && path[path.length - 1] !== char) {
        path = path + char;
    }

    return path;
}

function _noInit(path, char) {
    path = (path || '').trim();
    if (path.length > 0 && path[0] === char) {
        path = path.slice(1);
    }

    return path;
}

function _noFinal(path, char) {
    path = (path || '').trim();
    if (path.length > 0 && path[path.length - 1] === char) {
        path = path.slice(0, -1);
    }

    return path;
}

module.exports = {
    ensureInitSlash: (path) => _ensureInit(path, '/'),
    ensureFinalSlash: (path) => _ensureFinal(path, '/'),
    noInitSlash: (path) => _noInit(path, '/'),
    noFinalSlash: (path) => _noFinal(path, '/'),
    ensureInit: _ensureInit,
    ensureFinal: _ensureFinal,
    noInit: _noInit,
    noFinal: _noFinal
};
