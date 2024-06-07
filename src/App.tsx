import "./app.css";
import { Button } from "./button";

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
                <th>Hover</th>
                <th>Focus</th>
                <th>Disabled</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fill</td>
                <td>Base</td>
                <td>
                  <Button style="fill">Button</Button>
                </td>
                <td>
                  <Button style="fill" mock="hover">
                    Button
                  </Button>
                </td>
                <td>
                  <Button style="fill" mock="focus">
                    Button
                  </Button>
                </td>
                <td>
                  <Button style="fill" disabled>
                    Button
                  </Button>
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
                  <Button size="small" style="fill" mock="hover">
                    Button
                  </Button>
                </td>
                <td>
                  <Button size="small" style="fill" mock="focus">
                    Button
                  </Button>
                </td>
                <td>
                  <Button size="small" style="fill" disabled>
                    Button
                  </Button>
                </td>
              </tr>
              <tr>
                <td>Outline</td>
                <td>Base</td>
                <td>
                  <Button style="outline">Button</Button>
                </td>
                <td>
                  <Button style="outline" mock="hover">
                    Button
                  </Button>
                </td>
                <td>
                  <Button style="outline" mock="focus">
                    Button
                  </Button>
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
                  <Button size="small" style="outline" mock="hover">
                    Button
                  </Button>
                </td>
                <td>
                  <Button size="small" style="outline" mock="focus">
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
                  <Button style="ghost" mock="hover">
                    Button
                  </Button>
                </td>
                <td>
                  <Button style="ghost" mock="focus">
                    Button
                  </Button>
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
                  <Button size="small" style="ghost" mock="hover">
                    Button
                  </Button>
                </td>
                <td>
                  <Button size="small" style="ghost" mock="focus">
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
