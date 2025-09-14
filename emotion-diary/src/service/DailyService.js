const dailyService = {};

dailyService.create = async (daily) => {
    try {
        const response = await fetch("http://localhost:8080/api/daily", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(daily),
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
    return null;
}

dailyService.findAll = async (year, month) => {
    try {
        const response = await fetch(`http://localhost:8080/api/daily?year=${year}&month=${month}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
    return [];
};

dailyService.find = async (id) => {
    try {
        const response = await fetch("http://localhost:8080/api/daily/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
    return null;
}

dailyService.update = async (daily) => {
    try {
        const response = await fetch("http://localhost:8080/api/daily/" + daily.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({emotion: daily.emotion, content: daily.content}),
        });
        return response.json();
    } catch (err) {
        console.log(err);
    }
    return null;
}

export default dailyService;