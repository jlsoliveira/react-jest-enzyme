import * as actions from "../actions/index";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("actions", () => {
  const subreddit = "reactjs";

  describe("selectSubreddit", () => {
    it("should create an action with a given subreddit", () => {
      const expectedAction = {
        type: actions.SELECT_SUBREDDIT,
        subreddit,
      };
      expect(actions.selectSubreddit(subreddit)).toEqual(expectedAction);
    });

  });
  
});
