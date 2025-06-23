import {assertEquals} from "https://deno.land/std/assert/mod.ts";

Deno.test("simple addition", () => {
    const result = 1 + 1;
    assertEquals(result, 2);
});
