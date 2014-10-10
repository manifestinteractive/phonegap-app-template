#!/bin/sh
#
# NOTE: This is just a template, please rename all instances of "myapp" & "MyApp" to your projects name
#
# Description: Developer SSH file for Build Automation of MyApp
#
# Author: Peter Schmalfeldt <me@peterschmalfeldt.com>
#
# Instructions:
# ------------------------------
# git clone this repository to a directory of your choosing, then
# in terminal enter the following command:
#
#    $ cp ./build/scripts/myapp.sh /Users/`whoami`/myapp.sh
#
# With a local copy of the file, you can make any file changes you need before moving onto the next step.
#
# Now, in your ~/.bash_profile or ~/.zshrc file add the following line
#
#    $ source /Users/`whoami`/myapp.sh
#
# Then, in terminal, run the same command ( this makes your alias's work until restart )
#
#    $ source /Users/`whoami`/myapp.sh

# Quickly Jump to Project Directories
alias cd-myapp-app="cd /path/to/myapp"
alias cd-myapp-www="cd /path/to/myapp/www"

# Build Commands
alias build-myapp="__make_header 'Rebuilding MyApp'; cd-myapp-app; cordova build; cd -;"
alias build-myapp-ios="__make_header 'Rebuilding MyApp for iOS'; cd-myapp-app; cordova build ios; cd -;"
alias build-myapp-android="__make_header 'Rebuilding MyApp for Android'; cd-myapp-app; cordova build android; cd -;"
alias build-myapp-watch="__make_header 'Watching for Changes in MyApp'; open -a LiveReload; cd-myapp-www; (grunt watch &); cd -;"

# Emulate Commands
alias emulate-myapp-ios-iphone="__make_header 'Launching iPhone Simulator'; killall \"iPhone Simulator\"; cd-myapp-app; cordova emulate ios --target=\"iPhone\"; __debug_ios; cd -;"
alias emulate-myapp-ios-iphone-retina-3_5-inch="__make_header 'Launching iPhone Retina 3.5 Inch Simulator'; killall \"iPhone Simulator\"; cd-myapp-app; cordova emulate ios --target=\"iPhone (Retina 3.5-inch)\"; __debug_ios; cd -;"
alias emulate-myapp-ios-iphone-retina-4-inch="__make_header 'Launching iPhone Retina 4 Inch Simulator'; killall \"iPhone Simulator\"; cd-myapp-app; cordova emulate ios --target=\"iPhone (Retina 4-inch)\"; __debug_ios; cd -;"
alias emulate-myapp-ios-ipad="__make_header 'Launching iPad Simulator'; killall \"iPhone Simulator\"; cd-myapp-app; cordova emulate ios --target=\"iPad\"; __debug_ios; cd -;"
alias emulate-myapp-ios-ipad-retina="__make_header 'Launching iPad Retina Simulator'; killall \"iPhone Simulator\"; cd-myapp-app; cordova emulate ios --target=\"iPad (Retina)\"; __debug_ios; cd -;"
alias emulate-myapp-android-nexus7="__make_header 'Launching Android Nexus 7 Emulator'; killall emulator64-arm; cd-myapp-app; cordova emulate android --target=\"Nexus7\"; __debug_android; cd -;"
alias emulate-myapp-android-galaxy-s5="__make_header 'Launching Android Nexus 7 Emulator'; killall emulator64-arm; cd-myapp-app; cordova emulate android --target=\"Galaxy_S5\"; __debug_android; cd -;"

# PhoneGap Coommands
alias phonegap-myapp-serve="__make_header 'Starting MyApp PhoneGap Server'; cd-myapp-app; phonegap serve;"

### Public Functions ========================================

function myappapp()
{
    case "$1" in
        list)
            __myapp_app_list_commands
        ;;
        explain)
            __myapp_app_explain_alias "$2"
        ;;
        "-h" | "-help" | "--h" | "--help" | help)
            __help
        ;;
        *)
            __error "ERROR: Missing Argument | Usage: $0 { list | explain | help }"
    esac
}

### Private MyApp Functions ========================================

function __myapp_app_list_commands()
{
    __make_header "Available Commands"

    ALIASES=`alias | cut -d '=' -f 1`

    __output "MyApp Shortcuts:"

    echo "$ALIASES" | sort -u | grep cd-myapp-

    __output "MyApp Build Commands:"

    echo "$ALIASES" | sort -u | grep build-myapp-

    __output "MyApp Emulate Commands:"

    echo "$ALIASES" | sort -u | grep emulate-myapp-

    __output "MyApp PhoneGap Commands:"

    echo "$ALIASES" | sort -u | grep phonegap-myapp-

    echo ' '
}

function __myapp_app_explain_alias()
{
    __make_header "Alias Explanation"

    __output "$1 will execute the following command:"

    type -a "$1" | sed "s/$1 is an alias for //g"

    echo ' '
}

### Private Common Functions ========================================

function __make_header()
{
    echo " "
    echo " "
    echo -e "\e[48;5;22m  MyApp › $1  \e[0m"
    echo " "
}

function __output()
{
    echo " "
    echo -e "\e[38;5;34m→ MyApp › $1\e[0m"
    echo " "
}

function __notice()
{
    echo " "
    echo -e "\e[38;5;220m→ MyApp › $1\e[0m"
    echo " "
}

function __error()
{
    echo " "
    echo -e "\e[38;5;196m→ MyApp › $1\e[0m"
    echo " "
}

function __help()
{
    __make_header "Instructions"

    echo -e "\e[38;5;34m$ mi list\e[0m\n"

    echo "    Lists all available aliases for MyApp.\n"

    echo -e "\e[38;5;34m$ mi explain {alias}\e[0m\n"

    echo "    This will output what the command is for a specific alias without running it.\n"
    echo -e "    EXAMPLE: \e[38;5;220mmyappapp explain cd-project\e[0m\n"

    echo -e "\e[38;5;34m$ mi help\e[0m\n"

    echo "    Prints this help screen.\n"
}

function __debug_ios()
{
    cd-myapp-app
    ./www/build/scripts/open-webinspector.applescript &
}
