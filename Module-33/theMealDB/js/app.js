const loadMeal = (foodItem) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodItem}`)
        .then(response => response.json())
        .then(data => displayMeal(data.meals))
}

const displayMeal = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    for (const meal of meals) {
        let mealItem = document.createElement('div');
        mealItem.classList.add('meal-item', 'border', 'border-green-400', 'rounded-md', 'overflow-hidden');
        mealItem.innerHTML = `
        <div class="meal-item border border-green-400 rounded-md overflow-hidden" onclick="getMealDetails(${meal.idMeal})">
        <img src="${meal.strMealThumb}"
            alt="" class="w-full">
        <div class="p-2">
            <h3 class="text-3xl text-green-600 font-semibold mt-2">${meal.strMeal}</h3>
            <p class="text-black my-3">${meal.strInstructions.slice(0, 200)}...<span class="text-blue-400">See More</span></p>
        </div>

    </div>
`
        mealContainer.appendChild(mealItem);
    }
}

document.getElementById('search-btn').addEventListener('click', function () {
    const getFoodField = document.getElementById('input-field');
    const getFoodItemName = getFoodField.value;
    loadMeal(getFoodItemName);
})

const getMealDetails = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(res => res.json())
        .then(data => showMealsDetails(data.meals))
}

const showMealsDetails = (mealDetails) => {
    const foodItemDetails = document.getElementById('food-item-details');
    foodItemDetails.innerHTML = '';
    for (const mealDetail of mealDetails) {
        let showMealDetails = document.createElement('div');
        showMealDetails.classList.add('flex', 'border', 'border-green-500', 'overflow-hidden');
        showMealDetails.innerHTML = `
        <div class=""><img src="${mealDetail.strMealThumb}" alt=""></div>
        <div class="p-2 flex-none w-96 h-14">
        <h3 class="text-2xl text-white font-semibold">${mealDetail.strMeal}
        <p class="mt-2 text-xl font-normal text-black">${mealDetail.strInstructions}</p>
        </div>
        `
        foodItemDetails.appendChild(showMealDetails);
    }
}

loadMeal('rice');