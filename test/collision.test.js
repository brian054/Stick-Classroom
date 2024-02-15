import { AABB_Collision } from "../helpers";

describe('AABB_Collision', () => {
    test("Should return true if rects ovelap", () => {
        expect(AABB_Collision(0, 0, 10, 10, 5, 5, 10, 10)).toBe(true);
    });

    test("Should return false if rects do not overlap", () => {
        expect(AABB_Collision(0, 0, 10, 10, 100, 100, 10, 10)).toBe(false);
    });

    test("Should return error due to undefined parameters", () => {
        // Why the arrow function tho?
        // 'expect' needs a function to invoke so that it can catch any exceptions thrown by AABB().
        // If we called AABB directly without wrapping it in a function like we do here, the execption
        // would be thrown before 'expect' has a chance to catch it, resulting in failed test like before
        expect(() => AABB_Collision(undefined, 0, 10, 10, 5, 5, 10, 10)).toThrow("AABB(): One or more parameters undefined.");
    })
})