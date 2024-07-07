import "./app.css";
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";

function App() {
  return (
    <>
      <div className="root">
        <div className="center">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Default</th>
                <th>Disabled</th>
                <th>Default</th>
                <th>Disabled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fill</td>
                <td>Base</td>
                <td>
                  {/* <button className="btn btn--base btn--fill">
                    Button html
                  </button> */}
                  <Button style="fill">Button</Button>
                </td>
                <td>
                  <Button style="fill" disabled>
                    Button
                  </Button>
                </td>
                <td>
                  <IconButton name="ArrowRight" />
                </td>
                <td>
                  <IconButton name="ArrowRight" disabled />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Small</td>
                <td>
                  <Button size="small" style="fill">
                    Button
                  </Button>
                </td>
                <td>
                  <Button size="small" style="fill" disabled>
                    Button
                  </Button>
                </td>
                <td>
                  <IconButton size="small" name="ArrowRight" />
                </td>
                <td>
                  <IconButton size="small" name="ArrowRight" disabled />
                </td>
              </tr>
              <tr>
                <td>Outline</td>
                <td>Base</td>
                <td>
                  <Button style="outline">Button</Button>
                </td>
                <td>
                  <Button style="outline" disabled>
                    Button
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>small</td>
                <td>
                  <Button size="small" style="outline">
                    Button
                  </Button>
                </td>
                <td>
                  <Button size="small" style="outline" disabled>
                    Button
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Ghost</td>
                <td>Base</td>
                <td>
                  <Button style="ghost">Button</Button>
                </td>
                <td>
                  <Button style="ghost" disabled>
                    Button
                  </Button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>small</td>
                <td>
                  <Button size="small" style="ghost">
                    Button
                  </Button>
                </td>
                <td>
                  <Button size="small" style="ghost" disabled>
                    Button
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
