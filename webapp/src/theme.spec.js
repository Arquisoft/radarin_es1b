import "@testing-library/jest-dom/extend-expect";
import theme from "./theme";


test("web theme", async () => {
    expect(theme.direction).toBe( "ltr");
});

