import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";


export default function ProductReviews() {
    return (
        <div>
            <h1>Product Reviews</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Product />
            </Suspense>
                <Suspense fallback={<div>Loading...</div>}>
                    <Reviews />
                </Suspense>
         
        </div>
    )
}