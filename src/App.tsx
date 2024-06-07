import "./styles.css";

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
                  <button className="btn btn--fill">Button</button>
                </td>
                <td>
                  <button className="btn btn--fill mock--hover">Button</button>
                </td>
                <td>
                  <button className="btn btn--fill mock--focus">Button</button>
                </td>
                <td>
                  <button className="btn btn--fill" disabled>
                    Button
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Small</td>
                <td>
                  <button className="btn btn--small btn--fill">Button</button>
                </td>
                <td>
                  <button className="btn btn--small btn--fill mock--hover">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--small btn--fill mock--focus">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--small btn--fill" disabled>
                    Button
                  </button>
                </td>
              </tr>
              <tr>
                <td>Outline</td>
                <td>Base</td>
                <td>
                  <button className="btn btn--outline">Button</button>
                </td>
                <td>
                  <button className="btn btn--outline mock--hover">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--outline mock--focus">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--outline" disabled>
                    Button
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Small</td>
                <td>
                  <button className="btn btn--small btn--outline">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--small btn--outline mock--hover">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--small btn--outline mock--focus">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--small btn--outline" disabled>
                    Button
                  </button>
                </td>
              </tr>
              <tr>
                <td>Ghost</td>
                <td>Base</td>
                <td>
                  <button className="btn btn--ghost">Button</button>
                </td>
                <td>
                  <button className="btn btn--ghost mock--hover">Button</button>
                </td>
                <td>
                  <button className="btn btn--ghost mock--focus">Button</button>
                </td>
                <td>
                  <button className="btn btn--ghost" disabled>
                    Button
                  </button>
                </td>
              </tr>
              <tr>
                <td></td>
                <td>Small</td>
                <td>
                  <button className="btn btn--small btn--ghost">Button</button>
                </td>
                <td>
                  <button className="btn btn--small btn--ghost mock--hover">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--small btn--ghost mock--focus">
                    Button
                  </button>
                </td>
                <td>
                  <button className="btn btn--small btn--ghost" disabled>
                    Button
                  </button>
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
