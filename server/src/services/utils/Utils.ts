class Utils {
    static filterKeysAgainstModelKeys(changes, modelKeys) {
        const changesKeys = Object.keys(changes);
        const filteredKeys = changesKeys.filter((key) => !modelKeys.includes(key));

        // construct filteredChanges
        const filteredChanges = {};
        filteredKeys.forEach((key) => {
            filteredChanges[key] = changes[key];
        })

        return filteredChanges;
    }

    static obscureAuthOfModel(model) {
        const obscuredModel = model;
        obscuredModel.auth.password = undefined;
        return obscuredModel;
    }
    
}

export default Utils;