package ui;

import javax.swing.*;

public class Logger {
    String userName;
    String userPassword;


    public Logger() {
        JTextField userNameInput = new JTextField(5);
        JTextField userPasswordInput = new JTextField(5);

        JPanel myPanel = new JPanel();
        myPanel.add(new JLabel("user name:"));
        myPanel.add(userNameInput);
        myPanel.add(Box.createHorizontalStrut(15)); // a spacer
        myPanel.add(new JLabel("user password:"));
        myPanel.add(userPasswordInput);

        int result = JOptionPane.showConfirmDialog(null, myPanel,
                "Enter GitHub user name and password", JOptionPane.OK_CANCEL_OPTION);
        if (result == JOptionPane.OK_OPTION) {
            System.out.println("x value: " + userNameInput.getText());
            userName = userNameInput.getText();
            System.out.println("y value: " + userPasswordInput.getText());
            userPassword = userPasswordInput.getText();
        }

    }

    public String getUserName() {
        return userName;
    }

    public String getUserPassword() {
        return userPassword;
    }
}

