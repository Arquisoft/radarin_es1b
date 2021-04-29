import React from "react";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Map from "./MAinMap";
import MapView from '../MapView';

  
  const { container } = render(<MapView webId="https://webid.example/#me"/>);
  
  describe("Ver mapa", () => {
    it("renders without crashing", () => {
      expect(container).toBeTruthy();
    });
  });