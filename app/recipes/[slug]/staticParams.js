// [slug]/staticParams.js
import recipes from "@/public/recipes/recipes";

export async function generateStaticParams() {
    return recipes.map((recipe) => ({ slug: recipe.slug }));
}
