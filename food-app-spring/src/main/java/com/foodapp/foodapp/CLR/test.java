package com.foodapp.foodapp.CLR;

import com.foodapp.foodapp.beans.*;
import com.foodapp.foodapp.services.FoodGroupService;
import com.foodapp.foodapp.services.RestaurantService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.persistence.OneToMany;
import java.util.Arrays;
import java.util.List;

@Component
@RequiredArgsConstructor
public class test implements CommandLineRunner {
    private final RestaurantService restaurantService;
    private final FoodGroupService foodGroupService;
    private String placeholderImage = "https://files.mishloha.co.il/files/menu_food_pic/FIL_248132_637484034736406780.jpg?v=2";


    @Override
    public void run(String... args) throws Exception {
//        try{
        restaurantService.addRestaurant(Restaurant.builder().id(1).type("ים תיכוני")
                .name("המקום של אסתי").deliveryCost(50).minOrder(550)
                .openingHour("9:00").closingHour("22:00").banner("https://media-cldnry.s-nbcnews.com/image/upload/t_fit-2000w,f_auto,q_auto:best/newscms/2021_28/1748873/director-of-taco-relations-kb-main-210714.jpg")
                .logo("https://d25t2285lxl5rf.cloudfront.net/images/shops/29710.jpg")
                .rating(3.6F).reviewCount(42).foodGroups(null).dishes(null).build());
        restaurantService.addFoodGroup(1, FoodGroup.builder().name("מנות פופולריות").build());
        restaurantService.addFoodGroup(1, FoodGroup.builder().name("עיקריות").build());
        restaurantService.addFoodGroup(1, FoodGroup.builder().name("סנדוויצ'ים").build());
        restaurantService.addFoodGroup(1, FoodGroup.builder().name("קינוחים").build());

        FoodGroup fav = foodGroupService.getOne(1);
        FoodGroup mainDish = foodGroupService.getOne(2);
        FoodGroup sandwich = foodGroupService.getOne(3);
        FoodGroup desert = foodGroupService.getOne(4);
        restaurantService.addDish(1, Dish.builder().title("קבב").cost(62)
                .description("קבב בפיתה בתיבול מזרחי").img(placeholderImage).foodGroups(List.of(mainDish)).build());
        restaurantService.addDish(1, Dish.builder().title("עוגת שוקולוד").cost(40)
                .description("המתכון הסודי של סבתא").img(placeholderImage).foodGroups(List.of(desert)).build());
        restaurantService.addDish(1, Dish.builder().title("מלבי").cost(32)
                .description("קינוח טוב").img(placeholderImage).foodGroups(List.of(desert)).build());
        restaurantService.addDish(1, Dish.builder().title("שניצל ").cost(42)
                .description("שניצל מטוגן טעים").img(placeholderImage).foodGroups(List.of(mainDish, fav)).build());
        restaurantService.addDish(1, Dish.builder().title("המבורגר").cost(50)
                .description("בשר עסיסי ברוטב הבית").img(placeholderImage).foodGroups(List.of(mainDish)).build());
        restaurantService.addDish(1, Dish.builder().title("דג ים").cost(64)
                .description("ישר מהים לצלחת").img(placeholderImage).foodGroups(List.of(mainDish, fav)).build());
        restaurantService.addDish(1, Dish.builder().title("ביצת הפתעה").cost(35)
                .description("תוצרת קינדר תעשיות בעמ").img(placeholderImage).foodGroups(List.of(desert)).build());
        restaurantService.addDish(1, Dish.builder().title("מרק שוקולד").cost(44)
                .description("מרק שוקולד מריר").img(placeholderImage).foodGroups(List.of(desert)).build());
        restaurantService.addDish(1, Dish.builder().title("חלווה").cost(44)
                .description("חלווה אסלית").img(placeholderImage).foodGroups(List.of(desert)).build());
        restaurantService.addDish(1, Dish.builder().title("ערמת מקופלת").cost(44)
                .description("ערימת מקופלת ענקית ברוטב שוקולד").img(placeholderImage).foodGroups(List.of(desert)).build());
        restaurantService.addDish(1, Dish.builder().title("מלבי").cost(33)
                .description("מלבי אסלי").img(placeholderImage).foodGroups(List.of(desert)).build());
        restaurantService.addDish(1, Dish.builder().title("שיפוד פרגית").cost(40)
                .description("שיפוד פרגית על האש").img(placeholderImage).foodGroups(List.of(mainDish)).build());
        restaurantService.addDish(1, Dish.builder().title("סנדוויץ' טונה").cost(33.50F)
                .description("לחם כפרי, טונה ריו ומלא מלא מלא טקסט שנראה מה קורה פה בעסק אם יש בעיות רספונסיביות באתר. נבדוק טוב טוב ואולי נוסיף קצת מלפפון")
                .img(placeholderImage).foodGroups(List.of(sandwich)).build());

        restaurantService.addReview(1, Review.builder().date("01/01/2021").rating(3)
                .userDetails("אייל ג.").content("אפשר לאכול שם").build());
        restaurantService.addReview(1, Review.builder().date("10/02/2021").rating(4)
                .userDetails("משה כ.").content("טעים טעים טעים!!!!!").build());
        restaurantService.addReview(1, Review.builder().date("14/02/2021").rating(4)
                .userDetails("מרנין כ.").content("חסר מלח").build());
        restaurantService.addReview(1, Review.builder().date("15/02/2021").rating(5)
                .userDetails("אוהד ז.").content("האוכל הגיע חם, נזמין שוב").build());
        restaurantService.addReview(1, Review.builder().date("17/02/2021").rating(1)
                .userDetails("אבי ג.").content("לא לאכול שם").build());
        restaurantService.addReview(1, Review.builder().date("17/02/2021").rating(1)
                .userDetails("אבנר ג.").content("האוכל הגיע קר").build());
        restaurantService.addReview(1, Review.builder().date("12/01/2021").rating(3)
                .userDetails("פנחס ר.").content("מחירים הוגנים, אוכל סבבה").build());
        restaurantService.addReview(1, Review.builder().date("12/01/2021").rating(5)
                .userDetails("אלמוג ב.").content("מעולה").build());
        restaurantService.addReview(1, Review.builder().date("15/02/2021").rating(5)
                .userDetails("אוהד ר.").content("הכי טעים שיש").build());
        restaurantService.addReview(1, Review.builder().date("15/02/2021").rating(4)
                .userDetails("יונתן ב.").content("טעים").build());
//        restaurantService.addDishSelect(1, 0, DishSelect.builder().title("רטבים").maxSelect(3)
//                .selectItems(Arrays.asList(SelectItem.builder().cost(0).title("קטשופ").build()
//                        ,SelectItem.builder().cost(0).title("מיונז").build(),
//                        SelectItem.builder().cost(0).title("חרדל").build()
//                        )).build());
//        System.out.println(restaurantService.getRestaurantDetails(1).getDishes().get(0).getDishSelects());
//        System.out.println(restaurantService.getRestaurantDetails(1).getFoodGroups());
//            System.out.println(restaurantService.getRestaurantDetails(1).getFoodGroups().get(0).getDishes().get(0));
//        }
//        catch(Exception e){
//            System.out.println(e.getMessage());
//        }


    }
}
