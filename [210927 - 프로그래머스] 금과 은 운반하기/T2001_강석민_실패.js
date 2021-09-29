function sortAsc(element1, element2) {
    return element1[4] - element2[4];
}

function gsAdd(city, gsObj, a, b) {
    let addGold = city[1][0] < city[3] ? city[1][0] : city[3]
    if(gsObj.goldF + addGold >= a && city[1][0] !== 0) {
        addGold = a - gsObj.goldF;
        gsObj.goldF += addGold;
        gsObj.silver += city[3] - addGold;
        city[1][0] -= addGold;
        city[1][1] -= city[3] - addGold;
    }
    else if(city[1][0] >= city[3]) {
        gsObj.goldF += city[3];
        city[1] = [city[1][0] - city[3], city[1][1]];
    } else {
        const addSilver = city[3] - city[1][0];
        gsObj.goldF += city[1][0];
        gsObj.silver += addSilver;
        city[1] = [0, city[1][1] - addSilver];
    }
    let addSilver = city[2][1] < city[3] ? city[2][1] : city[3]
    if(gsObj.silverF + addSilver >= b && city[2][1] !== 0) {
        addSilver = b - gsObj.silverF;
        gsObj.silverF += addSilver;
        gsObj.gold += city[3] - addSilver;
        city[2][1] -= addSilver;
        city[2][0] -= city[3] - addSilver;
    } else if(city[2][1] >= city[3]) {
        gsObj.silverF += city[3];
        city[2] = [city[2][0], city[2][1] - city[3]];
    } else {
        const addGold = city[3] - city[2][1];
        gsObj.gold += addGold;
        gsObj.silverF += city[2][1];
        city[2] = [city[2][0] - addGold, 0];
    }
}

function inject(city, a, b, gsObj) {
    const gsSum = city[1][0] + city[1][1]
    if(gsSum <= city[3]) {
        gsObj.goldF += city[1][0];
        gsObj.silver += city[1][1];
        gsObj.gold += city[2][0];
        gsObj.silverF += city[2][1];
        city[1] = [0, 0];
        city[2] = [0, 0];
    } else {
        gsAdd(city, gsObj, a, b);
    }
    city[4] = city[4] + 2 * city[0];
}

function solution(a, b, g, s, w, t) {
    // 금 먼저 채우기, 은 먼저 채우기
    const gsObj = {
        goldF: 0,
        silverF: 0,
        gold: 0,
        silver: 0,
        gF() { return this.goldF >= a && this.silver >= b },
        sF() { return this.silverF >= b && this.gold >= a },
    }
    
    // 자료 저장 도시 = [시간, [금먼저 할경우 금, 은], [은먼저 할경우 금, 은], 중량, 다음 도착 시간]
    const cityList = g.map((value, index) => [t[index], [value, s[index]], [value, s[index]], w[index], t[index]]);
    
    // 시간으로 오름차순 정렬
    cityList.sort(sortAsc)
    let answer = cityList[0][4];
    let count = 0;

    while (true) {
        for(let index=0; index<cityList.length; index++) {
            if(cityList[index][4] !== answer) break;
            inject(cityList[index], a, b, gsObj);
        }
        cityList.sort(sortAsc)
        if(gsObj.gF() || gsObj.sF()) break;
        answer = cityList[0][4]
    }
    return answer;
}
